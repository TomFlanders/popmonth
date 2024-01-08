"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.popmonthTab = void 0;
var obsidian_1 = require("obsidian");
var fsPromise = require("fs/promises");
var fs = require("fs");
var DEFAULT_SETTINGS = {
    theYear: "2024",
    theMonth: "1"
};
var popmonth = /** @class */ (function (_super) {
    __extends(popmonth, _super);
    function popmonth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    popmonth.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new popmonthTab(this.app, this));
                        this.addCommand({
                            id: "popmonth",
                            name: "popmonth",
                            callback: function () {
                                _this.createFiles();
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    popmonth.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    popmonth.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    popmonth.prototype.createFiles = function () {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            function daysInMonth(month, year) {
                return new Date(year, month, 0).getDate();
            }
            var dir, theYear, theMonth, limit, spec, daydata, dailyTasks, basePath, file, _d, _e, _f, line, splitdata, e_1_1, error_1, x, filestring, dateString, thisDay, dayNum, pmdata, filestring2;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        dir = "/daily/";
                        theYear = parseInt(this.settings.theYear);
                        theMonth = parseInt(this.settings.theMonth);
                        limit = daysInMonth(theMonth, theYear);
                        spec = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
                        daydata = ["", "", "", "", "", "", ""];
                        dailyTasks = "";
                        basePath = this.app.vault.adapter.basePath;
                        return [4 /*yield*/, fsPromise.open(basePath + '/.obsidian/plugins/popmonth/data.csv', 'r')];
                    case 1:
                        file = _g.sent();
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 13]);
                        _d = true, _e = __asyncValues(file.readLines());
                        _g.label = 3;
                    case 3: return [4 /*yield*/, _e.next()];
                    case 4:
                        if (!(_f = _g.sent(), _a = _f.done, !_a)) return [3 /*break*/, 6];
                        _c = _f.value;
                        _d = false;
                        line = _c;
                        splitdata = line.split(",");
                        switch (splitdata[0]) {
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
                        _g.label = 5;
                    case 5:
                        _d = true;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _g.trys.push([8, , 11, 12]);
                        if (!(!_d && !_a && (_b = _e.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _b.call(_e)];
                    case 9:
                        _g.sent();
                        _g.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        _g.trys.push([13, 15, , 16]);
                        return [4 /*yield*/, this.app.vault.createFolder(dir)
                            // The check succeeded
                        ];
                    case 14:
                        _g.sent();
                        return [3 /*break*/, 16];
                    case 15:
                        error_1 = _g.sent();
                        return [3 /*break*/, 16];
                    case 16:
                        for (x = 1; x <= limit; x++) {
                            filestring = "/daily/" + theYear.toString() + "-" + theMonth.toString().padStart(2, '0') + "-" + x.toString().padStart(2, '0') + ".md";
                            dateString = theYear.toString() + "-" + theMonth.toString() + "-" + x.toString() + " 00:00:00";
                            thisDay = new Date(dateString);
                            dayNum = thisDay.getDay();
                            pmdata = daydata[dayNum];
                            pmdata += spec[x];
                            pmdata += dailyTasks;
                            filestring2 = basePath + filestring;
                            if (fs.existsSync(filestring2)) {
                                fs.appendFileSync(filestring2, pmdata, 'utf-8');
                            }
                            else {
                                this.app.vault.create(filestring, pmdata);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return popmonth;
}(obsidian_1.Plugin));
exports.default = popmonth;
var popmonthTab = /** @class */ (function (_super) {
    __extends(popmonthTab, _super);
    function popmonthTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    popmonthTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        new obsidian_1.Setting(containerEl)
            .setName("Year")
            .setDesc("Year of Month")
            .addText(function (text) {
            return text
                .setPlaceholder("2024")
                .setValue(_this.plugin.settings.theYear)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.theYear = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian_1.Setting(containerEl)
            .setName("Month")
            .setDesc("Month of Year")
            .addText(function (text) {
            return text
                .setPlaceholder("1")
                .setValue(_this.plugin.settings.theMonth)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.theMonth = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return popmonthTab;
}(obsidian_1.PluginSettingTab));
exports.popmonthTab = popmonthTab;
