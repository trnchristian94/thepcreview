del /q ".\app\dist\*"
FOR /D %%p IN (".\app\dist\*.*") DO rmdir "%%p" /s /q
call npm install
cmd /k