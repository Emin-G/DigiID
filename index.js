let cat = 0;
let form = new Map();

window.addEventListener("load", () => {
    const uA = navigator.userAgent;
    if (uA.indexOf("KAKAOTALK") > -1 || uA.indexOf("NAVER") > -1) {
        document.getElementById("tilt1").textContent = "엇!";
        document.getElementById("tilt2").textContent = "지원하지 않는 브라우저에요.";
        document.getElementById("sub").textContent = "브라우저에서 열기를 누르시거나 창을 닫고 아래 두 브라우저 중 하나로 접속해주세요.";
        document.getElementById("browser").style.display = "flex";
        document.getElementById("ent").style.display = "none";
    }

    const sclv = localStorage.getItem("sc_lv");
    const sccl = localStorage.getItem("sc_cl");
    const scnm = localStorage.getItem("sc_nm");
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    if (sclv && sccl && scnm && name && id) {
        return window.open("./view/view.html", "_self");
    }

    setTimeout(() => {
        document.getElementById("load").style.animation = "0.5s 0s 1 fade_out forwards";

        setTimeout(() => {
            document.getElementById("load").remove();
        }, 500);
    }, 3000);

    document.getElementById("ent").addEventListener("click", () => {
        console.log("A");
        if (cat == 0) ent1();
        if (cat == 1) ent2();

        if (cat == 2) {
            let temp_sc = new Map();
            temp_sc["sc_lv"] = parseInt(document.getElementById("sc_lv").value);
            temp_sc["sc_cl"] = parseInt(document.getElementById("sc_cl").value);
            temp_sc["sc_nm"] = parseInt(document.getElementById("sc_nm").value);
            if (temp_sc["sc_lv"] && 0 < temp_sc["sc_lv"] && temp_sc["sc_lv"] < 4) {
                if (temp_sc["sc_cl"] && 0 < temp_sc["sc_cl"] && temp_sc["sc_cl"] < 16) {
                    if (temp_sc["sc_nm"] && 0 < temp_sc["sc_nm"] && temp_sc["sc_nm"] < 41) {
                        ent3();
                    }
                    else return document.getElementById("sub").textContent = "번호가 정확하지 않습니다.";
                }
                else return document.getElementById("sub").textContent = "반이 정확하지 않습니다.";
            }
            else return document.getElementById("sub").textContent = "학년이 정확하지 않습니다.";
        }

        if (cat == 3) {
            if (document.getElementById("name").value && 1 < document.getElementById("name").value.length && document.getElementById("name").value.length < 6) ent4();
            else return document.getElementById("sub").textContent = "이름이 정확하지 않습니다.";
        }

        if (cat == 777) return;
        if (cat == 400) return window.location.reload();

        if (cat == -77) return endup();

        cat++;
    });

    function ent1 () {
        document.getElementById("tilt1").style.animation = "0.5s 0.2s 1 slide_out forwards";
        document.getElementById("tilt2").style.animation = "0.5s 0.2s 1 slide_out forwards";
        document.getElementById("sub").style.animation = "0.5s 0s 1 slide_out forwards";

        setTimeout(() => {
            document.getElementById("tilt1").textContent = "먼저, 발급을 위해";
            document.getElementById("tilt2").textContent = "실물 학생증을 준비해주세요.";
            document.getElementById("sub").textContent = "진위 여부 확인을 위해 학생증 인증이 필요해요.";
            document.getElementById("prepare").style.display = "flex";

            document.getElementById("tilt1").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("tilt2").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_in forwards";
            document.getElementById("prepare").style.animation = "0.5s 0.4s 1 slide_in forwards";
        }, 700);
    }

    function ent2 () {
        //Opacity Handle
        document.getElementById("sub").style.opacity = "1";

        document.getElementById("tilt1").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("tilt2").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_out forwards";
        document.getElementById("prepare").style.animation = "0.5s 0s 1 slide_out forwards";

        setTimeout(() => {
            //Opacity Handle
            document.getElementById("tilt1").style.opacity = "0";
            document.getElementById("tilt2").style.opacity = "0";
            document.getElementById("sub").style.opacity = "0";
            
            document.getElementById("prepare").style.display = "none";

            document.getElementById("tilt1").textContent = "학생 인증을 위해";
            document.getElementById("tilt2").textContent = "다음 정보를 입력해주세요.";
            document.getElementById("sub").textContent = "정확히 입력해주세요.";
            document.getElementById("sc_inp").style.display = "flex";

            document.getElementById("tilt1").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("tilt2").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_in forwards";
            document.getElementById("sc_inp").style.animation = "0.5s 0.4s 1 slide_in forwards";
        }, 900);
    }

    function ent3 () {
        form["sc_lv"] = document.getElementById("sc_lv").value;
        form["sc_cl"] = document.getElementById("sc_cl").value;
        form["sc_nm"] = document.getElementById("sc_nm").value;

        //Opacity Handle
        document.getElementById("tilt1").style.opacity = "1";
        document.getElementById("tilt2").style.opacity = "1";
        document.getElementById("sub").style.opacity = "1";

        document.getElementById("tilt1").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("tilt2").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_out forwards";
        document.getElementById("sc_inp").style.animation = "0.5s 0s 1 slide_out forwards";

        setTimeout(() => {
            document.getElementById("sc_inp").style.display = "none";

            //Opacity Handle
            document.getElementById("tilt1").style.opacity = "0";
            document.getElementById("tilt2").style.opacity = "0";
            document.getElementById("sub").style.opacity = "0";

            document.getElementById("tilt1").textContent = "이제 거의 끝났습니다!";
            document.getElementById("tilt2").textContent = "이름을 정확히 입력해주세요.";
            document.getElementById("sub").textContent = "아 제발 집가고 싶다.";
            document.getElementById("nm_inp").style.display = "flex";

            document.getElementById("tilt1").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("tilt2").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_in forwards";
            document.getElementById("nm_inp").style.animation = "0.5s 0.4s 1 slide_in forwards";
        }, 900);
    }

    function ent4 () {
        cat = 777;
        form["name"] = document.getElementById("name").value;

        //Opacity Handle
        document.getElementById("tilt1").style.opacity = "1";
        document.getElementById("tilt2").style.opacity = "1";
        document.getElementById("sub").style.opacity = "1";

        document.getElementById("tilt1").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("tilt2").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_out forwards";
        document.getElementById("nm_inp").style.animation = "0.5s 0s 1 slide_out forwards";
        document.getElementById("ent").style.animation = "0.5s 0s 1 slide_out forwards";

        setTimeout(() => {
            document.getElementById("nm_inp").style.display = "none";
            document.getElementById("ent").style.display = "none";

            //Opacity Handle
            document.getElementById("tilt1").style.opacity = "0";
            document.getElementById("tilt2").style.opacity = "0";
            document.getElementById("sub").style.opacity = "0";

            document.getElementById("tilt1").textContent = "실물 학생증 인증이 필요합니다.";
            document.getElementById("tilt2").textContent = "학생증의 바코드를 보여주세요.";
            document.getElementById("sub").textContent = "자동으로 인식합니다. 최대한 가까이에서 초점을 잘 잡은 상태로 기다려주세요. 특히, 바코드에 빛이 반사되지 않도록 해주세요.";
            document.getElementById("auth").style.display = "flex";

            document.getElementById("tilt1").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("tilt2").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_in forwards";
            document.getElementById("auth").style.animation = "0.5s 0.4s 1 slide_in forwards";

            id_auth();
        }, 900);
    }

    function ent5 () {
        cat = -77;
        if (String(form["id"]).length != 9) return ent_err("notMatch");

        //Opacity Handle
        document.getElementById("tilt1").style.opacity = "1";
        document.getElementById("tilt2").style.opacity = "1";
        document.getElementById("sub").style.opacity = "1";

        document.getElementById("tilt1").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("tilt2").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_out forwards";
        document.getElementById("auth").style.animation = "0.5s 0s 1 slide_out forwards";

        setTimeout(() => {
            document.getElementById("auth").style.display = "none";

            //Opacity Handle
            document.getElementById("tilt1").style.opacity = "0";
            document.getElementById("tilt2").style.opacity = "0";
            document.getElementById("sub").style.opacity = "0";

            document.getElementById("tilt1").textContent = "마지막으로,";
            document.getElementById("tilt2").textContent = "주의사항을 정독 해주세요.";
            document.getElementById("sub").textContent = "정말 중요합니다. 천천히 읽어주세요.";
            document.getElementById("warn").style.display = "flex";
            document.getElementById("ent").style.display = "flex";

            document.getElementById("tilt1").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("tilt2").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_in forwards";
            document.getElementById("warn").style.animation = "0.5s 0.4s 1 slide_in forwards";

            document.getElementById("ent").style.animation = "0.5s 0s 1 slide_in forwards";
        }, 900);
    }

    function ent_err (reason) {
        console.log(reason);

        //Opacity Handle
        document.getElementById("tilt1").style.opacity = "1";
        document.getElementById("tilt2").style.opacity = "1";
        document.getElementById("sub").style.opacity = "1";

        document.getElementById("tilt1").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("tilt2").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_out forwards";
        document.getElementById("auth").style.animation = "0.5s 0s 1 slide_out forwards";

        setTimeout(() => {
            cat = 400;
            document.getElementById("auth").style.display = "none";

            //Opacity Handle
            document.getElementById("tilt1").style.opacity = "0";
            document.getElementById("tilt2").style.opacity = "0";
            document.getElementById("sub").style.opacity = "0";
            document.getElementById("auth_fail").style.display = "flex";
            document.getElementById("ent").style.display = "flex";

            document.getElementById("tilt1").textContent = "엇,";

            if (reason === "notMatch") document.getElementById("tilt2").textContent = "유효성 검사에 실패했어요...";
            else document.getElementById("tilt2").textContent = "뭔가 문제가 생겼어요.";
            
            document.getElementById("sub").textContent = "카메라 권한 문제일 수 있어요. 다시 시도를 눌러 다시 시도해보세요.";

            document.getElementById("ent").textContent = "다시 시도";

            document.getElementById("tilt1").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("tilt2").style.animation = "0.5s 0s 1 slide_in forwards";
            document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_in forwards";
            document.getElementById("auth_fail").style.animation = "0.5s 0.2s 1 slide_in forwards";

            document.getElementById("ent").style.animation = "0.5s 0s 1 slide_in forwards";
        }, 900);
    }

    function endup () {
        //Opacity Handle
        document.getElementById("tilt1").style.opacity = "1";
        document.getElementById("tilt2").style.opacity = "1";
        document.getElementById("sub").style.opacity = "1";
        
        document.getElementById("tilt1").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("tilt2").style.animation = "0.5s 0.4s 1 slide_out forwards";
        document.getElementById("sub").style.animation = "0.5s 0.2s 1 slide_out forwards";
        document.getElementById("warn").style.animation = "0.5s 0s 1 slide_out forwards";
        document.getElementById("ent").style.animation = "0.5s 0s 1 slide_out forwards";
        
        setTimeout(() => {
            document.getElementById("tilt1").style.display = "none";
            document.getElementById("tilt2").style.display = "none";
            document.getElementById("sub").style.display = "none";
            document.getElementById("warn").style.display = "none";
            document.getElementById("ent").style.display = "none";

            localStorage.setItem("sc_lv", form["sc_lv"]);
            localStorage.setItem("sc_cl", form["sc_cl"]);
            localStorage.setItem("sc_nm", form["sc_nm"]);
            localStorage.setItem("name", form["name"]);
            localStorage.setItem("id", form["id"]);
            
            return window.open("./view/view.html", "_self");
        }, 900);
    }

    function id_auth () {
        let selectedDeviceId;
        const codeReader = new ZXing.BrowserBarcodeReader();
        console.log("ZXing code reader initialized");
    
        codeReader.getVideoInputDevices()
            .then((videoInputDevices) => {
                selectedDeviceId = videoInputDevices[videoInputDevices.length - 1].deviceId;
    
                codeReader.decodeOnceFromVideoDevice(selectedDeviceId, "zxing").then((result) => {
                    console.log(result);
                    form["id"] = parseInt(result.text);
                    ent5();
                    return codeReader.reset();
                }).catch((err) => {
                    console.error(err);
                    ent_err(err);
                    return codeReader.reset();
                })
                console.log("Started continous decode from camera with id " + selectedDeviceId);
            })
    
            .catch((err) => {
                console.error(err);
                return ent_err(err);
            });
    }
});