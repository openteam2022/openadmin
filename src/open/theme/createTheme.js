// 此文件引入到app.vue

export default function CreateLink(){
    let link = document.createElement("link");
    link.type = "text/css";
    link.id = "theme";
    link.rel = "stylesheet";
    link.href = "css/theme_1.css"; //css文件路径
    document.getElementsByTagName("head")[0].appendChild(link);
}