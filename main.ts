import { Plugin, App, PluginSettingTab, Setting } from "obsidian";
import * as fsPromise from 'fs/promises'; 
const fs = require("fs");

interface popmonthSettings {
  theYear: string;
  theMonth: string;
}

const DEFAULT_SETTINGS: Partial<popmonthSettings> = {
  theYear: "2024",
  theMonth: "1"
};

export default class popmonth extends Plugin {
  settings: popmonthSettings;

  async onload() {
    await this.loadSettings();

    this.addSettingTab(new popmonthTab(this.app, this));

    this.addCommand({
      id: "popmonth",
      name: "popmonth",
      callback: () => {
        this.createFiles();
      },
    });
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  async createFiles() {
    const dir = "/daily/"
    function daysInMonth (month:number, year:number) {
      return new Date(year, month, 0).getDate();
    }
    
    let theYear = parseInt(this.settings.theYear);
    let theMonth = parseInt(this.settings.theMonth);
    let limit = daysInMonth(theMonth,theYear);
    let spec: string[] = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
    let daydata: string[] = ["","","","","","",""];
    let dailyTasks = "";

    const basePath = (this.app.vault.adapter as any).basePath;

    const file = await fsPromise.open(basePath + '/.obsidian/plugins/popmonth/data.csv', 'r');
    for await (const line of file.readLines()) {
      let splitdata = line.split(",")
      switch(splitdata[0]){
        case "weekday":
          daydata[Number(splitdata[1])] += splitdata[2] + "\n";
          break;
        case "spec":
          spec[Number(splitdata[1])] += splitdata[2] + "\n";
          break;
        case "limit":
          spec[limit] += splitdata[2] + "\n";
          break;
        case "daily":
          dailyTasks += splitdata[2] + "\n";
          break;
        default:
          break;
      }
    }

    try {
      await this.app.vault.createFolder(dir)
      // The check succeeded
    } catch (error) {
      // The check failed
    }

    for (let x = 1; x <= limit; x++){
      let filestring = "/daily/" + theYear.toString() + "-" + theMonth.toString().padStart(2, '0') + "-" + x.toString().padStart(2, '0') + ".md";
      let dateString = theYear.toString() + "-" + theMonth.toString() + "-" + x.toString() + " 00:00:00";
      let thisDay = new Date(dateString);
      let dayNum = thisDay.getDay();

      let pmdata = daydata[dayNum];
      pmdata += spec[x];
      pmdata += dailyTasks;

     let filestring2 = basePath + filestring;
     if (fs.existsSync(filestring2)) {
      fs.appendFileSync(filestring2, pmdata, 'utf-8');
     } else {
      this.app.vault.create(filestring, pmdata);
     }

    }
  }
}

export class popmonthTab extends PluginSettingTab {
    plugin: popmonth;
  
    constructor(app: App, plugin: popmonth) {
      super(app, plugin);
      this.plugin = plugin;
    }
  
    display(): void {
      let { containerEl } = this;
  
      containerEl.empty();
  
      new Setting(containerEl)
        .setName("Year")
        .setDesc("Year of Month")
        .addText((text) =>
          text
            .setPlaceholder("2024")
            .setValue(this.plugin.settings.theYear)
            .onChange(async (value) => {
              this.plugin.settings.theYear = value;
              await this.plugin.saveSettings();
            })
        );

        new Setting(containerEl)
        .setName("Month")
        .setDesc("Month of Year")
        .addText((text) =>
          text
            .setPlaceholder("1")
            .setValue(this.plugin.settings.theMonth)
            .onChange(async (value) => {
              this.plugin.settings.theMonth = value;
              await this.plugin.saveSettings();
            })
        );
      }
  }
