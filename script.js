document.querySelector('#chack').addEventListener('click', function () {
        const userdate = new Date(document.querySelector('#dob').value);
        const curdate = new Date()
        const years = document.querySelector('.years')
        const month = document.querySelector('.monts')
        const days = document.querySelector('.days')

        let yeardiff = curdate.getFullYear() - userdate.getFullYear()
        let monthdiff = curdate.getMonth() - userdate.getMonth()
        let daydiff = curdate.getDate() - userdate.getDate()
        if (isNaN(yeardiff) && isNaN(monthdiff) && isNaN(daydiff)) {
            alert("age is invelid");
        } else if (yeardiff < 0) {
            alert('inter a valid date')
        }
        else {
            if (daydiff < 0) {
                const daysInPevMonth = new Date(curdate.getFullYear(), curdate.getMonth(), 0).getDate();
                daydiff += daysInPevMonth
                monthdiff--
            }
            if (monthdiff < 0) {
                monthdiff += 12;
                yeardiff--
            }
            years.innerHTML = `${yeardiff} : Years`;
            month.innerHTML = `${monthdiff} : Months`;
            days.innerHTML = `${daydiff} : Days`;
        }
    })