function dangNhap() {
    var taiKhoan = document.getElementById('txtTaiKhoan').value;
    var matKhau = document.getElementById('txtMatKhau').value;
    var nguoiDungSV = new nguoiDungService();

    nguoiDungSV.DangNhap(taiKhoan, matKhau).then(function (res) {
        console.log(res.data);
        if (res.data.MaLoaiNguoiDung === 'QuanTri') {
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            window.location.assign('index.html');
        }
    })
        .catch(function () {
            console.log(ex, message);
        })
}


document.getElementById('btnDangNhap').addEventListener('click', dangNhap);