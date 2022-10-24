function generateQR() {
    let canvas = document.getElementById('canvas');
    let qrInput = document.getElementById('qrInput').value;
    QRCode.toCanvas(canvas, qrInput, (err) => {
        if(err) console.error(err);
        Swal.fire({
            icon: 'success',
            title: 'QR-Code Berhasil Di Generate',
            showConfirmButton: false,
            timer: 1000
          })
    })
}

function mess() {
    Swal.fire({
        icon: 'info',
        title: 'Welcome!',
        text: 'Masukkan Link Kedalam Input Untuk Mengubah nya Menjadi QR-Code'
      })
}