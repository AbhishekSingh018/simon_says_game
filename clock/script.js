setInterval(() => {
    const d = new Date();

    hour.style.transform =`translateX(-50%) rotate(${30 * d.getHours() + d.getMinutes() / 2}deg)`;

    minute.style.transform =`translateX(-50%) rotate(${6 * d.getMinutes()}deg)`;

    second.style.transform = `translateX(-50%) rotate(${6 * d.getSeconds()}deg)`;
}, 1000);
