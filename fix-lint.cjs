const fs = require('fs');

function replaceStr(file, search, replace) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(search, replace);
  content = content.replace(search, replace);
  fs.writeFileSync(file, content);
}

replaceStr('src/components/DopplerRadar.jsx', 'const condition = weather?.current?.condition?.text || "Clear";\n', '');
replaceStr('src/components/DopplerRadar.jsx', 'const condition = weather?.current?.condition?.text || "Clear";\r\n', '');
replaceStr('src/components/EmergencyAlertBanner.jsx', '  const currentCity = weather?.location?.name || "Target Sector";\r\n', '');
replaceStr('src/components/EmergencyAlertBanner.jsx', '  const currentCity = weather?.location?.name || "Target Sector";\n', '');
replaceStr('src/lib/AppearanceContext.jsx', '    const body = document.body;\r\n', '');
replaceStr('src/lib/AppearanceContext.jsx', '    const body = document.body;\n', '');

console.log("Fixed unused variables part 2");
