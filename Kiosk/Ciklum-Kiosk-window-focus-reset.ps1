######################################################
##########            Kiosk Mode          ############
######################################################
#
# Runs chrome and other apps in full-screen mode 
# on predefined screens
# ----------------------------------------------------

$chromePath = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$chromeArguments = '--new-window --autoplay-policy=no-user-gesture-required --kiosk'
# if Window not moved (especially on machine start) - try increaing the delay. 
$ChromeStartDelay = 1


Set-Location $PSScriptRoot
. .\HelperFunctions.ps1

# Kill all running instances
# &taskkill /im chrome* /F

Focus-Reset -MonitorNum 1
taskkill /im chrome*