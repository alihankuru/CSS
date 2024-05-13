export class MenuModel{
    name: string="";
    icon: string="";
    url: string="";
    isTitle: boolean=false;
    subMenus: MenuModel[]=[];
}

export const Menus: MenuModel[]=[
    {
        name:"Ana Sayfa",
        icon: "fas fa-solid fa-home",
        url:"/",
        isTitle: false,
        subMenus: []
    },
    {
        name:"Admin",
        icon: "fas fa-solid fa-home",
        url:"/",
        isTitle: false,
        subMenus: []
    },
    {
         name:"Yönetim",
         icon: "fas fas fa-tachometer-alt",
         url:"/",
         isTitle: false,
         subMenus: [
            {
                name:"Kullanicilar",
                icon: "fas fa-solid fa-home",
                url:"/",
                isTitle: false,
                subMenus: []
            }
         ]

}
]