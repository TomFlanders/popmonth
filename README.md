# popmonth
Obsidian plugin to populate a month of calendar files with todo lists

## author
Tom Flanders

## version
1.0.0

## dependencies
TBD

## installation
TBD

## usage
Edit file data.csv to include items to be added to calendar pages.

format:
itemType,itemDay,item
Types are: 
    weekday (uses itemDay of 0 for Sunday to 6 for Saturday)
    spec (specific day, itemDay is the day of the month)
    limit (last day of the month, itemDay is always 0)
    daily (added to every file, itemDay is always 0)

example:
weekday,0,- [ ] Job Searches
weekday,6,- [ ] Publish Blog
spec,1,- [ ] Archive last months date files
spec,15,- [ ] Website Validations
limit,0,- [ ] Populate Next Month
daily,0,- [ ] morning pills
daily,0,- [ ] evening pills

I use the checkbox markup, but anything could be used.

Set settings for month, year and folder

From the command menu, select popmonth:popmonth

Files that already exist will be appended. Others will be created.

Files are created in the folder specified in the settings, using the format: YYYY-MM-DD.md


## output

## Issues
Tested on Windows and Linux. 
To be tested on Android.
I don't have a Mac, so can't test for that.
