// Очищаем текст от лишних символов
var cleanText = function(text) {
    return text.replace(/\r|\n|\t/g, '').trim();
};

module.exports.cleanText = cleanText;