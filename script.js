// Arquivo: script.js

// Data de quando vocês começaram a namorar
const startDate = new Date('2024-07-14T00:00:00');

// Função que calcula o tempo decorrido
function calculateTimeTogether() {
    const now = new Date();
    
    // Obtenha o ano, mês, dia, hora, minuto e segundo atuais
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    // Obtenha o ano, mês, dia, hora, minuto e segundo da data de início
    let startYear = startDate.getFullYear();
    let startMonth = startDate.getMonth();
    let startDay = startDate.getDate();
    let startHour = startDate.getHours();
    let startMinute = startDate.getMinutes();
    let startSecond = startDate.getSeconds();

    // Cálculo da diferença em anos
    let years = currentYear - startYear;

    // Cálculo da diferença em meses
    let months = currentMonth - startMonth;

    // Cálculo da diferença em dias
    let days = currentDay - startDay;

    // Cálculo da diferença em horas, minutos e segundos
    let hours = currentHour - startHour;
    let minutes = currentMinute - startMinute;
    let seconds = currentSecond - startSecond;

    // Ajuste para segundos negativos
    if (seconds < 0) {
        minutes--; // Subtrai um minuto
        seconds += 60; // Ajusta para segundos positivos
    }

    // Ajuste para minutos negativos
    if (minutes < 0) {
        hours--; // Subtrai uma hora
        minutes += 60; // Ajusta para minutos positivos
    }

    // Ajuste para horas negativas
    if (hours < 0) {
        days--; // Subtrai um dia
        hours += 24; // Ajusta para horas positivas
    }

    // Se o dia atual for menor que o dia de início, ajusta o mês e os dias
    if (days < 0) {
        months--; // Subtrai um mês
        // Obter o número de dias do mês anterior
        const lastMonth = new Date(currentYear, currentMonth, 0);
        days += lastMonth.getDate(); // Adiciona os dias do mês anterior
    }

    // Se o mês atual for menor que o mês de início, ajusta o ano e os meses
    if (months < 0) {
        years--; // Subtrai um ano
        months += 12; // Adiciona 12 meses para normalizar
    }

    // Atualizando o conteúdo HTML
    document.getElementById('time').innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

// Atualiza o contador a cada segundo
setInterval(calculateTimeTogether, 1000);

