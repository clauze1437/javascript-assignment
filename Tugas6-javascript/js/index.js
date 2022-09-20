class Gempa {
    constructor(lokasi, skala) {
      this.lokasi = lokasi;
      this.skala = skala;
    }
  
    dampak() {
      if (this.skala <= 2) {
        this.dampakGempa = 'tidak terasa';
      } else if (this.skala > 2 && this.skala <= 4) {
        this.dampakGempa = 'bangunan retak-retak';
      } else if (this.skala > 4 && this.skala <= 6) {
        this.dampakGempa = 'bangunan roboh';
      } else if (this.skala > 6) {
        this.dampakGempa = 'bangunan roboh dan berpotensi tsunami';
      } else {
        this.dampakGempa = ""
      }
      return this.dampakGempa;
    }
  
    Data() {
      return `
        <tr>
          <td>${this.lokasi}</td>
          <td>${this.skala}</td>
          <td>${this.dampak()}</td>
        </tr>
      `;
    }
  }
  
  g1 = new Gempa('Aceh', 7);    g2 = new Gempa('Bogor', 4.2);  g3 = new Gempa('Manado', 3);
  g4 = new Gempa('Papua', 3);  g5 = new Gempa('Bali', 5.3);    g6 = new Gempa('Maluku', 6);
  g7 = new Gempa('Bengawan', 5);     g8 = new Gempa('Seoul', 6.2);  g9 = new Gempa('Bali', 1.5);    g10 = new Gempa('Jogja', 3);
  var dataGempa = [
    g1.Data(1), g2.Data(2), g3.Data(3), g4.Data(4), g5.Data(5),
    g6.Data(6), g7.Data(7), g8.Data(8), g9.Data(9), g10.Data(10)
  ];
  document.getElementById('tableBody').innerHTML = dataGempa.join('');