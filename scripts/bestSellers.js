

let productsData = [
    {
        img: "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        name: "REDEFINE Regimen",
        priceInnerH: "$220.00 |  $197.00 With <span style="color: #31c2e8;"> PC PERKS</span>",
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        name: "Total RF Serum",
        priceInnerH:"$175.00 |  $157.00<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/ENHLSH01-cat.jpg?context=bWFzdGVyfGltYWdlc3wxMTM0NXxpbWFnZS9qcGVnfGltYWdlcy9oM2EvaDExLzg4MjE4NDQ1NzQyMzguanBnfDJhZTNkODRiNDQ0YjQwZjY3MGQwMTVmNWEwMzFkYmEzMzMxNTBjMDc0MDRjNGM4NWYwYzVkNTg2NzY0MjQyZGI",
        name: "R + F Lash Boost",
        priceInnerH:"$155.00 |  $139.00 With <span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/ENHEY15-720x600-DESKTOP-v4.jpg?context=bWFzdGVyfGltYWdlc3w2MDYyOXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGI2LzEzNTMzMTczODc0NzE4LmpwZ3w0MGI1MmM0OTExMmRiMzUzYzg5YTIyNWJjZTdiOTZkNzk1ZTVmOTk2MTBhY2IzZTcwNzhkZDI4NTUxZDI5Zjhh",
        name: "Active Hydration Bright Eye Complex",
        priceInnerH:"$72.00 |  $64.00 With <span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/ENHEFG1-720x600-desktop-1.jpg?context=bWFzdGVyfGltYWdlc3wxNTcwMHxpbWFnZS9qcGVnfGltYWdlcy9oOGIvaGI0LzEzNTMzMTcxNTE1NDIyLmpwZ3wyZjgzMWEzNzJhNjRjZmZmNTU3NTBjODE0NjcxYjgzY2Q2Y2MxMzgyNzk3ZjcxOTU3OGUyYTVlNzE5MjI4OTI5",
        name: "Active Hydration Serum",
        priceInnerH:"$112.00 |  $100.00 With <span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
        name: "REDEFINE Multi-Function Eye Cream",
        priceInnerH:"$70.00 |  $63.00 With <span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/ENBR001-720x600-DESKTOP.jpg?context=bWFzdGVyfHJvb3R8MTg2NDR8aW1hZ2UvanBlZ3xoNWMvaGQ5LzEzNTMzMTYzMDk0MDQ2LmpwZ3xiNmNjNjE3YmJmOTI4Y2UzZjAwM2RkMDQwZDNkNmNiZDQyZWQzMzQ4N2ZjZmMxOWY1OGEzYjQ1MTFiM2M1MGE5",
        name: "Rodan + Fields Active Hydration Body Replenish",
        priceInnerH:"$66.00 |  $59.00 With <span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/ENPS125-720x600-desktop-1-.jpg?context=bWFzdGVyfGltYWdlc3wxNTA5OXxpbWFnZS9qcGVnfGltYWdlcy9oMjAvaGM0LzEzNTMzMTc3NTc3NTAyLmpwZ3xlNTFkYzhjOTA0ZjA2ZWUyNzhiNDljYTJiNGQ0MDIxY2NmZTNlNmRjYTc1YWNkOGNmMDg2N2RkYmYzMGQyYTc4",
        name: "Rodan + Fields Enhancements Micro-Dermabrasion Paste",
        priceInnerH:"$83.00 |  $74.00 With <span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
        name: "REVERSE Regimen",
        priceInnerH:"$195.00 |  $175.00 With <span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU",
        name: "UNBLEMISH Regimen",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    },

    {
        img:"",
        name: "",
        priceInnerH:"<span style="color: #31c2e8;"> PC PERKS</span>"
    }

]