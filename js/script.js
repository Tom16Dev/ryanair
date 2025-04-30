function doPost(e) {
  const ss   = SpreadsheetApp.openById('PASTE-SHEET-ID');
  const sh   = ss.getSheets()[0];                     // first sheet
  const data = JSON.parse(e.postData.contents);

  sh.appendRow([
    new Date(),               // Timestamp
    data.first_name || '',
    data.email      || '',
    data.source     || ''
  ]);

  return ContentService.createTextOutput('OK')
                       .setMimeType(ContentService.MimeType.TEXT);
}
