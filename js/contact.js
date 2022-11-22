
let namaId = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let username = namaId('username'),
    email = namaId('email'),
    phone = namaId('phone'),
    subject = namaId('subject'),
    message = namaId('message')
    errorMsg = classes('eror'),
    button = namaId('submit')

// Saat kita submit maka kirim data di dalamnya ke funcition submitData()
function onSubmit(){
    submitData(username, 0, 'Please input your name');
    submitData(email, 1, 'Please input your email');
    submitData(phone, 2, 'Please input your phone number');
    submitData(subject, 3, 'Please input your subject');
    submitData(message, 4, 'Please input your message')  
}

// di sini melakukan pengecekan satu2 data yang ada di onSubmit
let submitData = (id, serial, warning) => {

    function fail() {
        errorMsg[serial].innerHTML = warning;
        id.style.border = "2.5px solid #e11d48"
    }

    if(id.value.trim() === ""){
        return fail()
    }

    if(namaId('username').value && namaId('email').value && namaId('phone').value && namaId('subject').value && namaId('message').value !== ""){
        return emailTo()
    }

    function emailTo(){
        let emailReciver = "khafidz225@gmail.com"
        let link = document.createElement('a')
        link.href = `mailto: ${emailReciver}?subject=${subject.value}&body=Hallo nama saya ${username.value}, ${message.value}, silahkan kontak saya di nomer ${phone.value}`
        link.click()
    }
}

// Saat kita mengetik maka kitim data ke Function input()
function onInput(){
    input(username, 0);
    input(email, 1);
    input(phone, 2);
    input(subject, 3);
    input(message, 4);
}

// Di sini melakukan pengecekan saat mengetik
let input = (id, serial) => {
    function success() {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2.5px solid #6366f1";
    }

    if(id.value.trim() !== ""){
        return success()
    }
}

