@echo off
setlocal

REM ============================================================
REM  Publishes apexstack.dev
REM
REM  Just double-click this file and follow the browser prompt.
REM ============================================================

cd /d "%~dp0"

echo.
echo ============================================================
echo   PUBLISHING apexstack.dev
echo ============================================================
echo.
echo   A browser window will open asking you to log in.
echo.
echo   IMPORTANT - which account:
echo     Your website belongs to the Vercel account:
echo.
echo         apexstackdev-3320
echo.
echo     If the browser is signed in as "itsanasmaqsood",
echo     switch accounts first, or publishing will fail.
echo.
echo   Press any key to start...
echo.
pause >nul

REM Clear any previous (possibly wrong) login so the browser asks fresh.
call npx vercel logout >nul 2>&1

echo.
echo   Opening browser for login...
echo.
call npx vercel login
if errorlevel 1 goto loginfailed

echo.
echo   Logged in. Publishing now...
echo.
call npx vercel --prod --yes
if errorlevel 1 goto deployfailed

echo.
echo ============================================================
echo   DONE - look above for:  Aliased  https://apexstack.dev
echo   If you see that line, your site is live.
echo ============================================================
echo.
pause
exit /b 0

:loginfailed
echo.
echo ============================================================
echo   LOGIN DID NOT COMPLETE
echo.
echo   The approval page timed out or was not approved.
echo   Just run this file again and press Allow more quickly.
echo ============================================================
echo.
pause
exit /b 1

:deployfailed
echo.
echo ============================================================
echo   PUBLISHING FAILED
echo.
echo   If it says "Could not retrieve Project Settings",
echo   you logged in with the wrong Vercel account.
echo   Run this file again and sign in as: apexstackdev-3320
echo.
echo   Otherwise, screenshot this window and send it over.
echo ============================================================
echo.
pause
exit /b 1
