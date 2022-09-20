class GempaBumi {
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
    }

    dampak() {
        if (this.skala > 0 && this.skala <= 2) return 'tidak terasa';
        else if (this.skala > 2 && this.skala <= 4) return 'bangunan retak - retak';
        else if (this.skala > 4 && this.skala <= 6) return 'bangunan roboh';
        else if (this.skala > 6) return 'bangunan roboh dan berpotensi tsunami';
    }

    Datanya() {
        return `<td>${this.lokasi}</td><td>${this.skala}</td><td>${this.dampak()}</td>`;
    }
}   
const gempabumi1 = new GempaBumi('Bandung', 6.5); const gempabumi2 = new GempaBumi('Surabaya', 1); const gempabumi3 = new GempaBumi('Bogor', 2.6);
const gempabumi4 = new GempaBumi('Bekasi', 5.4); const gempabumi5 = new GempaBumi('Cikarang', 2);const gempabumi6 = new GempaBumi('Sukabumi', 7.2); const gempabumi7 = new GempaBumi('Lombok', 3.2); const gempabumi8 = new GempaBumi('Pengandaran', 1.7); 
const gempabumi9 = new GempaBumi('Bali', 2.4); const gempabumi10 = new GempaBumi('Solo', 4.2);

const arrVarGempaBumi = [gempabumi1, gempabumi2, gempabumi3, gempabumi4, gempabumi5, gempabumi6, gempabumi7, gempabumi8, gempabumi9, gempabumi10]

let temp = '';
for (const varGempaBumi of arrVarGempaBumi) {
    temp += `<tr>${varGempaBumi.Datanya()}
                </tr>`;
}
const tablenya =
    `<table><thead>
    <tr><th>Lokasi</th>
    <th>Skala</th>
    <th>Dampaknya</th>
    </tr>
    </thead>
    <tbody>${temp}</tbody>
    </table>`;
document.write(tablenya);