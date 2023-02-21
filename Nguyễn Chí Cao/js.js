//====Nhập Thông Tin Của Bạn Vào Đây==============

ImgLink_Background = "https://www.couriermail.com.au/wp-content/uploads/2022/03/background-4.6fe58f1618b7294c42a9c456ccb55044.jpg"
ImgLink_Avatar = "https://f9-zpcloud.zdn.vn/213415844726288841/c6d7b65a86635c3d0572.jpg"
Nickname_Profile = "Sadboy"
RealName_Profile = "Cao Nguyen"
LinkInformation = [
    Facebook_LinkProfile = "https://www.facebook.com/nguyenn.cao106/",
    Discord_LinkProfile = "ChuaCoTaiKhoan",
    TikTok_LinkProfile = "https://media.istockphoto.com/id/1037704010/pl/wektor/czerwona-ikona-stopu-na-przezroczystym-tle-brak-symbolu-ilustracja-wektorowa.jpg?s=1024x1024&w=is&k=20&c=BJR_wqP6TPf-dsfrXCL6sz6PHs4HWirx7AF7UbN7nZI=",
    Instagram_LinkProfile = "https://www.instagram.com/_lofybboi.168/"
]

//================================================

divLoader = document.querySelector("#div__loader")
divShowAvatar = document.querySelector("#div__show__avatar")
divShowAvatar.onclick = () => { closeShowAvatar() }
showAvatar = document.querySelector("#show__avatar")
divMain = document.querySelector("#div__main")
divProfile = document.querySelector("#div__profile")
document.querySelector("#avatar__border").onclick = () => { ShowAvatar() }
Avatar = document.querySelector("#avatar")
Nickname = document.querySelector("#nickname")
RealName = document.querySelector("#realName")
divLink = document.querySelectorAll(".div-link")
document.querySelector("#coder").onclick = () => {
    window.location = "https://www.facebook.com/nguyenn.cao106/"
}

window.onload = () => {
    divMain.style.background = `url(${ImgLink_Background})`
    Avatar.src = ImgLink_Avatar
    showAvatar.src = ImgLink_Avatar
    Nickname.innerText = Nickname_Profile
    RealName.innerText = RealName_Profile
    for (let i = 0; i < divLink.length; i++) {
        divLink[i].onclick = () => {
            if (i == 1) {
                alert("Kết Bạn Với " + LinkInformation[i])
            } else {
                window.location = LinkInformation[i]
            }
        }
    }

    setTimeout(() => {
        divLoader.style.opacity = "0"
        divMain.style.opacity = "1"
        divMain.style.zIndex = "10"
        setTimeout(() => {
            divProfile.style.marginTop = "0px"
            divProfile.style.opacity = "1"
            divProfile.style.transition = "all 1s"
        }, 1000)
    }, 1500)

    // Chỉnh Thuộc Tính Một Số Phần
    if (screen.width <= 500) {
        divMain.style.backgroundSize = "cover"
        divMain.style.backgroundPosition = "center bottom"
    } else {
        divMain.style.backgroundSize = "cover"
        divMain.style.backgroundPosition = "left bottom"
    }
}

function ShowAvatar() {
    divShowAvatar.style.zIndex = "8"
    divShowAvatar.style.opacity = "1"
}

function closeShowAvatar() {
    divShowAvatar.style.zIndex = "0"
    divShowAvatar.style.opacity = "0"
}