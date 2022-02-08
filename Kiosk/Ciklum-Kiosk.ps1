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

Chrome-Kiosk '127.0.0.1:3000/touchScreen.html' -MonitorNum 1
Chrome-Kiosk '127.0.0.1:3000/projector1.html' -MonitorNum 2
Chrome-Kiosk '127.0.0.1:3000/projector2.html' -MonitorNum 3