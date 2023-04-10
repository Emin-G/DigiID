#  DigiID

<p align="center">
<img  src="https://github.com/Emin-G/DigiID/blob/master/sources/logo.png?raw=true"  alt="DigiID"  width="30%">
</p>

<pre align="center">
심플한 웹 기반의 모바일 학생증 서비스 예제
</pre>

https://id.eming.me 에서 사용 해볼 수 있습니다.

먼저, 학생증의 바코드를 인식하여 **검증 없이** 새로운 바코드를 생성하는 방식의 특성상.

교내에서 정상적인 이용은 가능하지만,
타 학생의 학생증 도용과 같은 문제가 발생 할 수 있습니다.

따로 데이터 서버가 필요 없고 학교의 데이터를 가져 오지 않아도 정상적인 사용이 가능하게 개발했습니다.

바코드 스캔에 ZXing,
바코드 생성에 JsBarcode를 사용합니다.

아무 바코드 형식이나 인식 ➜ code128 형식의 바코드 생성

view.html 의 id_sc_nm 과 id_sc_ln 을 적용 대상인 고등학교의 정보로 변경하는 것을 권장합니다.

index.js 의 188번째 줄 if (String(form["id"]).length != 9) 를 주석 처리를 해제하고 9를 학생증 바코드 하단의 번호 길이로 변경하는 것을 권장합니다.

PWAs 를 지원합니다.
웹 앱을 설치할 수 있어 학생증 사용에 있어 편리함을 줄 수 있습니다.
view/manifest.json 의 start_url 을 사용하는 도메인으로 변경해야 할 수 있습니다.