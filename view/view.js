window.addEventListener("load", () => {
    const sclv = localStorage.getItem("sc_lv");
    const sccl = localStorage.getItem("sc_cl");
    const scnm = localStorage.getItem("sc_nm");
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    if (!sclv || !sccl || !scnm || !name || !id) {
        return window.open("../index.html", "_self");
    }

    document.getElementById("scnm").textContent = sclv + "학년 " + sccl + "반 " + scnm + "번"
    document.getElementById("name").textContent = name;

    JsBarcode("#barcode", id, {
        width: 2,
        height: 60,
        displayValue: false
    });

    document.getElementById("id_prev").style.animation = "0.5s 0s 1 hide_id cubic-bezier(0.600, -0.280, 0.735, 0.045) forwards";

    setTimeout(() => {
        document.getElementById("id_back").style.display = "none";
        document.getElementById("id_top").style.display = "flex";
        document.getElementById("id_prev").style.animation = "0.5s 0s 1 show_id cubic-bezier(0.175, 0.885, 0.320, 1.275) forwards";
    }, 500);

    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        
        document.getElementById("app_hint").style.display = "flex";
        document.getElementById("app_hint").style.animation = "1s 0s 1 slide_in ease-out forwards";

        document.getElementById("pwa_install").addEventListener("click", () => {
            event.prompt();
            document.getElementById("app_hint").style.animation = "1s 0s 1 slide_out ease-in forwards";
            setTimeout(() => {
                document.getElementById("app_hint").style.display = "none";
            }, 1000);
        }, { once: true });
    });
});