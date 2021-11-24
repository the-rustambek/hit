let selected = 0;
let localStorageData = localStorage.getItem('data')

let data = (localStorageData) ? JSON.parse(localStorageData) : {

    config: {
        background: 'black',
        name: 'Rustambek',
        myProfilePhoto: './assets/img/telegram.jpg'
    },
    chats: [{
        chatId: 1,
        chatName: 'Elnurjon develop',
        profileImg: './assets/img/Elnur.jpg',
        chatNumber: '+998 99 758 9814',
        notification: 'last seen 09:36 PM',
        username: "elnur_ruzmanov",
        chatMessages: [{
            sender: 'Rustambek',
            message: 'Assalomu Alaykum, Dostim Jack',
            chatTime: '17:56'
        }, {
            sender: 'Sarvarbek dost',
            message: 'Vaalaykum assalom,oshna',
            chatTime: "18:00"
        }]
    }, {
        chatId: 2,
        chatName: 'Ozodbek  najot ku ',
        profileImg: "./assets/img/kakam.jpg",
        chatNumber: '+998 99 588 74 12',
        notification: 'last seen at 09:12 PM',
        username: "ozodbek_uz",
        chatMessages: [{
            sender: 'Rustambek',

            message: 'Qalesiz, nima yangiliklar? Tinchmi',
            chatTime: '00:26'
        }, {
            sender: 'Elnur developer',
            message: 'Yaxshi raxmat.Kim bu? Tanimadim',
            chatTime: "18:00"
        }]
    }, {
        chatId: 3,
        chatName: 'Durbek aka kursd',
        profileImg: "./assets/img/mingbuloq.jpg",
        chatNumber: '+998 93 457 8985',
        notification: 'last seen at 07:22 PM',
        username: "will_macro",
        chatMessages: [{
            sender: 'Rustambek',

            message: 'Ishlar bolyaptimi? Tichmi?',
            chatTime: '12:46'
        }, {
            sender: 'Sarvarbek dost',
            message: 'Assalomu alaykum,ob-havo qale?',
            chatTime: "18:00"
        }]
    }, {
        chatId: 4,
        chatName: 'Asila Tatu kursdos',
        profileImg: "./assets/img/psixolog.jpg",
        chatNumber: '+998 99 758 3223',
        notification: 'last seen at 04:36 PM',
        username: "time_uz",
        chatMessages: [{
            sender: 'Rustambek',
            message: 'Assalomu Alaykum yaxshimisiz?',
            chatTime: '13:26'
        }, {
            sender: 'Elnur developer',
            message: 'Vaalaykum assalom, uydagilar yaxshimi?',
            chatTime: "18:00"
        }]
    }, {
        chatId: 5,
        chatName: 'Usmonxon  kursdo',
        profileImg: "./assets/img/foydalilink.jpg",
        chatNumber: '+998 99 757 5845',
        notification: 'last seen at 01:11 AM',
        username: "not_an_old_man",
        chatMessages: [{
            sender: 'Rustambek',
            message: 'Aka qalesiz, Telegram tugadimi?',
            chatTime: '22:06'
        }, {
            sender: 'Elnur developer',
            message: 'Yaxshi, qale ketyapti ingliz tili',
            chatTime: "18:00"
        }]
    }, {
        chatId: 6,
        chatName: 'MuhammadSiddiq',
        profileImg: "./assets/img/akam.jpg",
        chatNumber: '+998 99 758 7878',
        notification: 'last seen at 07:43 AM',
        username: "okk_7878",
        chatMessages: [{
            sender: 'Rustambek',

            message: 'Assalomu Alaykum aka',
            chatTime: '12:56'
        }, {
            sender: 'Elnur developer',
            message: 'Vaalaykum assalom ukajon',
            chatTime: "18:00"
        }]
    }, {
        chatId: 7,
        chatName: 'MuhammadAli aka',
        profileImg: "./assets/img/muhammadali.jpg",
        chatNumber: '+998 99 758 2222',
        notification: 'last seen at 04:06 AM',
        username: "nuhammadali_eshonqulov",
        chatMessages: [{
            sender: 'Rustambek',

            message: 'Assalomu Alaykum brat',
            chatTime: '04:56'
        }, {
            sender: 'Elnur developer',
            message: 'Vaalaykum assalom ',
            chatTime: "18:00"
        }]
    }, {
        chatId: 8,
        chatName: 'Yusuf kursda dost',
        profileImg: "./assets/img/mehrob.jpg",
        chatNumber: '+998 99 758 9784',
        notification: 'last seen at 03:36 PM',
        username: "yusuf_dev",
        chatMessages: [{
            sender: 'Rustambek',

            message: 'Assalomu Alaykum, nima  endi',
            chatTime: '17:56'
        }, {
            sender: 'Elnur developer',
            message: 'Va Alaykum assalom, lorem ipsum dolor sit ',
            chatTime: "18:00"
        }]
    }, {
        chatId: 9,
        chatName: 'Shoxruhbek akam',
        profileImg: "./assets/img/dif.jpg",
        chatNumber: '+998 91 111 1111',
        notification: 'last seen at 12:36 PM',
        username: "arxitektor_06",
        chatMessages: [{
            sender: 'Rustambek',
            message: 'Nima gap',
            chatTime: '17:56'
        }, {
            sender: 'Elnur developer',
            message: 'Tinchuxami?',
            chatTime: "18:00"
        }]
    }]
}



localStorage.setItem("data", JSON.stringify(data))

const asideListElement = document.querySelector(".aside-list")

userChatRender()




function asideRender(chatName, profileImg, chatTime, message) {

    const asideItemElement = document.createElement("li")
    const asideThumbElement = document.createElement("div")
    const asideLogoElement = document.createElement("img")

    const asideInfoElement = document.createElement("div")
    const asideSubtitleElement = document.createElement("p")

    const asideNameElement = document.createElement("span")
    const asideHourElement = document.createElement("span")

    const asideTextElement = document.createElement("p")
    const asideSubInfoElement = document.createElement("span")



    asideItemElement.classList.add("aside-item")
    // asideItemElement.classList.add("aside-item-active")
    asideThumbElement.classList.add("aside-thumb")
    asideLogoElement.classList.add("aside-logo")
    asideInfoElement.classList.add("aside-info")
    asideSubtitleElement.classList.add("aside-subtitle")

    asideNameElement.classList.add("aside-name")
    asideTextElement.classList.add("aside-text")
    asideSubInfoElement.classList.add("aside-subinfo")
    asideHourElement.classList.add("aside-hour")


    asideNameElement.textContent = chatName
    asideHourElement.textContent = chatTime
    asideLogoElement.src = profileImg
    asideSubInfoElement.textContent = "Assalomu alaykum ..."


    asideThumbElement.appendChild(asideLogoElement)
    asideItemElement.appendChild(asideThumbElement)

    asideSubtitleElement.appendChild(asideNameElement)
    asideSubtitleElement.appendChild(asideHourElement)
    asideInfoElement.appendChild(asideSubtitleElement)
    asideItemElement.appendChild(asideInfoElement)


    asideTextElement.appendChild(asideSubInfoElement)
    asideInfoElement.appendChild(asideTextElement)
    asideItemElement.appendChild(asideInfoElement)



    return asideItemElement

}



function userChatRender() {
    for (let item of data.chats) {
        asideListElement.appendChild(asideRender(item.chatName, item.profileImg, item.chatMessages[0].chatTime, item.chatMessages[1].message))

    }
}



asideItemElement = document.querySelectorAll(".aside-item")
faTimesBtnElement = document.querySelector(".fa-times-btn")
mainNameElement = document.querySelector(".main-name")
mainNtfElement = document.querySelector(".main-ntf")
mainLogoElement = document.querySelector(".main-logo")

asideItemElement.forEach((element, index) => {
    element.addEventListener("click", event => {
        event.preventDefault()
        asideItemElement.forEach(elem =>
            elem.classList.remove("aside-item-active"))
        element.classList.add("aside-item-active")
        selected = index

        mainChatsElement.style.display = "block"
        mainFooterElement.style.display = "flex"
        mainHeaderElement.style.display = "flex"



        const mainLEndElement = document.createElement("li")
        const mainLStartElement = document.createElement("li")



        mainLStartElement.classList.add("main-l-start")
        mainLEndElement.classList.add("main-l-end")


        mainLogoElement.src = data.chats[selected].profileImg;
        mainNameElement.textContent = data.chats[selected].chatName
        mainNtfElement.textContent = data.chats[selected].notification

        mainLStartElement.textContent = data.chats[selected].chatMessages[0][1]
        mainLEndElement.textContent = data.chats[selected].chatMessages[1][1]

        contentImgElement.src = data.chats[selected].profileImg;
        contentTitleElement.textContent = data.chats[selected].chatName
        contentNtfElement.textContent = data.chats[selected].notification
        contentTelElement.textContent = data.chats[selected].chatNumber
        contentUsernameElement.textContent = data.chats[selected].username
        
        mainListElement.appendChild(mainLStartElement)
        mainListElement.appendChild(mainLEndElement)
        


        renderSelectedChatMessages()



    })
})



function mainChatRender(messageText, messageChatTime, messageSender, messageChat) {

    mainListElement = document.querySelector(".main-list")

    if (messageSender == data.config.name) {
        const mainLEndElement = document.createElement("li")
        const mainTextElement = document.createElement("p")
        const mainLTimeElement = document.createElement("span")
        mainTextElement.classList.add("main-text")
        mainLTimeElement.classList.add("main-l-time")
        mainLEndElement.classList.add("main-l-end")

        mainLEndElement.appendChild(mainTextElement)
        mainLEndElement.appendChild(mainLTimeElement)

        mainLEndElement.textContent = messageText

        return mainLEndElement
        // asideSubInfoElement.textContent = mainInputElement.value()

    } else {
        const mainLStartElement = document.createElement("li")
        const mainTextElement = document.createElement("p")
        const mainLTimeElement = document.createElement("span")
        mainTextElement.classList.add("main-text")
        mainLTimeElement.classList.add("main-l-time")
        mainLStartElement.classList.add("main-l-start")

        mainLStartElement.appendChild(mainTextElement)
        mainLStartElement.appendChild(mainLTimeElement)

        mainLStartElement.textContent = messageText

        return mainLStartElement

    }



}



mainHeaderElement = document.querySelector(".main-header")
contentElement = document.querySelector(".content")
mainFooterElement = document.querySelector(".main-footer")
mainMicrophoneElement = document.querySelector(".main-microphone")
mainChatsElement = document.querySelector(".main-chats")
mainInputElement = document.querySelector(".main-input")
mainBoxElement = document.querySelector(".main-box")

contentImgElement = document.querySelector(".content-img")
contentTitleElement = document.querySelector(".content-title")
contentNtfElement = document.querySelector(".content-ntf")
contentTelElement = document.querySelector(".content-tel")
contentUsernameElement = document.querySelector(".content-username")


mainBoxElement.addEventListener("click", event => {

    contentElement.style.display = "block"
    // mainFooterElement.classList.add("main-footer--active")
    // mainFooterElement.style.margin = "50px 300px 20px 20px"
    mainMicrophoneElement.style.marginLeft = "10px"
    // mainChatsElement.style.margin = "10px"
    // mainInputElement.classList.add("main-input--active")
    searchSectionElement.style.display = "none"
    mainAsideElement.style.margin="0px"
    mainAsideElement.style.width="300px"
    mainAsideElement.style.left="50%"

    contentImgElement.src = data.chats[selected].profileImg;
    contentTitleElement.textContent = data.chats[selected].chatName
    contentNtfElement.textContent = data.chats[selected].notification
    contentTelElement.textContent = data.chats[selected].chatNumber
    contentUsernameElement.textContent = data.chats[selected].username

    console.log(data.chats[selected].username)




})




asideChannelElement = document.querySelector(".aside-channel")
asideChatsElement = document.querySelector(".aside-chats")
asideMenuActiveElement = document.querySelector(".aside-menu--active")
asideMenuNoneElement = document.querySelector(".aside-menu--none")


// asideItemElement.addEventListener("click", event => {

// mainChatsElement.style.display = "block"
// mainFooterElement.style.display = "flex"
// mainHeaderElement.style.display = "flex"
// asideItemElement.style.backgroundColor = "#8774E1"
// })



faTimesBtnElement.addEventListener("click", event => {
    contentElement.style.display = "none"
    // mainFooterElement.classList.remove("main-footer--active")
    mainMicrophoneElement.style.marginLeft("main-microphone--active")
    
    mainInputElement.classList.remove("main-input--active")
    





})



// console.log(data["config"])




mainSearchBtnElement = document.querySelector(".main-search-btn")
searchSectionElement = document.querySelector(".search-section")
searchSInputElement = document.querySelector(".search-s-input")
contentELement = document.querySelector(".content")
searchBtnElement = document.querySelector(".search-btn")
searchXSpanElement = document.querySelector(".search-x-span")


mainSearchBtnElement.addEventListener("click", event => {
    searchSectionElement.style.display = "flex"
    searchSectionElement.style.borderLeft = "1px solid black"
    contentElement.style.display = "none"
 
    mainAsideElement.style.margin="0px"
    mainAsideElement.style.width="300px"
    mainAsideElement.style.left="50%"
    searchBtnElement.addEventListener("click", event => {
        searchSectionElement.style.display = "none"
       
    })

    searchXSpanElement.addEventListener("click", event => {
        searchSInputElement.value = "";
    })


})

mainLEndElement = document.querySelector(".main-l-end")
mainLStartElement = document.querySelector(".main-l-start")
mainListElement = document.querySelector(".main-list")
mainMessageElement = document.querySelector(".main-message")
mainFormElement = document.querySelector(".main-form")




asideChannelElement.addEventListener("click", event => {
    asideChannelElement.classList.add("active")
    asideChatsElement.classList.remove("active")

})

asideChatsElement.addEventListener("click", event => {
    asideChatsElement.classList.add("active")
    asideChannelElement.classList.remove("active")

})



mainListElement = document.querySelector(".main-list")

mainFormElement.addEventListener("submit", event => {
    event.preventDefault()

    const time = new Date()

    data.chats[selected].chatMessages.push({
        message: mainInputElement.value,
        messageChatTime: `${time.getHours()}:${time.getMinutes()}`,
        sender: data.config.name
    })
    localStorage.setItem('data', JSON.stringify(data))

    console.log(data.chats[selected]);

    mainChatRender()
    renderSelectedChatMessages()
    mainFormElement.reset()
})


function renderSelectedChatMessages() {
    mainListElement.innerHTML = ""
    for (let message of data.chats[selected].chatMessages) {
        mainListElement.appendChild(mainChatRender(message.message, message.chatTime, message.sender))
    }
}


asideBtnELement = document.querySelector(".aside-btn")
asideNtfElement = document.querySelector(".aside-ntf")
asidePartElment = document.querySelector(".aside-part")


asideBtnELement.addEventListener("click", event => {
    asideNtfElement.style.display = "block"
    // asideChatsElement.style.display = "none"
    // asideChannelElement.style.display = "none"

})
asideBtnELement.addEventListener("dblclick", event => {
    asideNtfElement.style.display = "none"
})


sliderActiveRoundElement = document.querySelector(".slider-active")

bodyElement = document.querySelector(".telegram-body")

sliderActiveRoundElement.addEventListener("click", event => {

    bodyElement.classList.toggle('dark-mode')
})






mainMenuBtnElement = document.querySelector(".main-menu-btn")
mainAsideElement = document.querySelector(".main-aside")

mainMenuBtnElement.addEventListener("click", event => {
    mainAsideElement.style.display = "block"
})


mainMenuBtnElement.addEventListener("dblclick", event => {
    mainAsideElement.style.display = "none"
})






asideFormElement = document.querySelector(".aside-form")
asideSearchListElement = document.querySelector(".aside-search-list")






partElement=document.querySelector(".part")
asideNtfInputElement=document.querySelector(".aside-ntf-input")

asideNtfInputElement.addEventListener("click",event =>{
    partElement.classList.toggle("part-light")
    partElement.style.backgroundColor = "white"
})













// function asideSearchChatRender(chatName, profileImg, chatTime, message) {

//     const asideSearchItemElement = document.createElement("li")
//     const asideSearchThumbElement = document.createElement("div")
//     const asideSearchLogoElement = document.createElement("img")

//     const asideSearchInfoElement = document.createElement("div")
//     const asideSearchSubtitleElement = document.createElement("p")

//     const asideSearchNameElement = document.createElement("span")
//     const asideSearchHourElement = document.createElement("span")

//     const asideSearchTextElement = document.createElement("p")
//     const asideSearchSubInfoElement = document.createElement("span")



//     asideSearchElement.classList.add("aside-item")

//     asideSearchThumbElement.classList.add("aside-thumb")
//     asideSearchLogoElement.classList.add("aside-logo")
//     asideSearchInfoElement.classList.add("aside-info")
//     asideSearchSubtitleElement.classList.add("aside-subtitle")

//     asideSearchNameElement.classList.add("aside-name")
//     asideSearchTextElement.classList.add("aside-text")
//     asideSearchSubInfoElement.classList.add("aside-subinfo")
//     asideSearchHourElement.classList.add("aside-hour")


//     asideSearchNameElement.textContent = chatName
//     asideSearchHourElement.textContent = chatTime
//     asideSearchLogoElement.src = profileImg
//     asideSearchSubInfoElement.textContent = "Assalomu alaykum ..."


//     asideSearchThumbElement.appendChild(asideSearchLogoElement)
//     asideSearchElement.appendChild(asideSearchThumbElement)

//     asideSearchSubtitleElement.appendChild(asideSearchNameElement)
//     asideSearchSubtitleElement.appendChild(asideSearchHourElement)
//     asideSearchInfoElement.appendChild(asideSearchSubtitleElement)
//     asideSearchElement.appendChild(asideSearchInfoElement)


//     asideSearchTextElement.appendChild(asideSearchSubInfoElement)
//     asideSearchInfoElement.appendChild(asideSearchTextElement)
//     asideSearchSearchElement.appendChild(asideSearchInfoElement)



//     return asideSearchElement

// }



// function userSearchChatRender() {
//     for (let item of data.chats) {
//         asideSearchListElement.appendChild(asideSearchChatRender(item.chatName, item.profileImg, item.chatMessages[0].chatTime, item.chatMessages[1].message))

//     }
// }

// let temp;





// asideSearchElement = document.querySelector(".aside-search")
// asideSearchInputElement = document.querySelector(".aside-search-input")
// asideSearchListElement = document.querySelector(".aside-search-list")

// asideFormElement.addEventListener("submit", event => {
//     event.preventDefault()
//     asideMenuActiveElement.style.display = "none"
//     asideSearchElement.style.display = "block"

//     function asideSearch(name) {
//         name = asideSearchInputElement.value


//         for (let item of chats) {
//             if ((chats["chatName"].toLowerCase().includes(name.toLowerCase())) || 
//             (chats["chatName"].toLowerCase().includes(name.toLowerCase()) || 
//             ((chats["username"].toLowerCase().includes(name.toLowerCase())) || 
//             (chats["username"].toLowerCase().includes(name.toLowerCase()))))) {


//                 const asideSearchItemElement = document.createElement("li")
//                 const asideSearchThumbElement = document.createElement("div")
//                 const asideSearchLogoElement = document.createElement("img")

//                 const asideSearchInfoElement = document.createElement("div")
//                 const asideSearchSubtitleElement = document.createElement("p")

//                 const asideSearchNameElement = document.createElement("span")
//                 const asideSearchHourElement = document.createElement("span")

//                 const asideSearchTextElement = document.createElement("p")
//                 const asideSearchSubInfoElement = document.createElement("span")

//                 asideSearchItemElement.classList.add("aside-item")

//                 asideSearchThumbElement.classList.add("aside-thumb")
//                 asideSearchLogoElement.classList.add("aside-logo")
//                 asideSearchInfoElement.classList.add("aside-info")
//                 asideSearchSubtitleElement.classList.add("aside-subtitle")

//                 asideSearchNameElement.classList.add("aside-name")
//                 asideSearchTextElement.classList.add("aside-text")
//                 asideSearchSubInfoElement.classList.add("aside-subinfo")
//                 asideSearchHourElement.classList.add("aside-hour")


//                 asideSearchNameElement.textContent = chatName
//                 asideSearchHourElement.textContent = chatTime
//                 asideSearchLogoElement.src = profileImg
//                 asideSearchSubInfoElement.textContent = "Assalomu alaykum ..."

//                 asideSearchThumbElement.appendChild(asideSearchLogoElement)
//                 asideSearchItemElement.appendChild(asideSearchThumbElement)

//                 asideSearchSubtitleElement.appendChild(asideSearchNameElement)
//                 asideSearchSubtitleElement.appendChild(asideSearchHourElement)
//                 asideSearchInfoElement.appendChild(asideSearchSubtitleElement)
//                 asideSearchItemElement.appendChild(asideSearchInfoElement)


//                 asideSearchTextElement.appendChild(asideSearchSubInfoElement)
//                 asideSearchInfoElement.appendChild(asideSearchTextElement)
//                 asideSearchItemElement.appendChild(asideSearchInfoElement)
//                 asideSearchListElement.appendChild(asideSearchItemElement)


//             }
//         }


//     }


//     asideSearch()
// })



