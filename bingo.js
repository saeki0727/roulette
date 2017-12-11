$ = function(x) {
    return document.getElementById(x);
}

var numList;

var isStop = true;

function setNumList() {
    // 初期化
    numList = [1];

    if (form.num.value === null || form.num.value === "") {
        alert("参加者の人数を入力してください")
        return false;
    }

    for (var i = 2; i <= form.num.value; i++) {
        numList.push(i);
        console.log("set:"+i);
        console.log("setlength:"+numList.length);
    }
    alert(numList.length + "人分のルーレットを準備したよ。スタートボタンを押してね");
}

function startBingo() {
    if (form.num.value === null || form.num.value === "") {
        alert("参加者の人数を入力してください");
        return false;
    }

    $("start").style.display = "none";
    $("stop").style.display = "inline";
    isStop = false;

    roulette();
}

function stopBingo() {
    $("start").style.display = "inline";
    $("stop").style.display = "none";
    isStop = true;
}

function roulette() {
    var id = "";
    var rnd = Math.floor(Math.random() * numList.length);

    if (isStop) {
        clearTimeout(id);

        $("view").innerHTML = numList[rnd];
        if (!$("out").innerHTML) {
            $("out").innerHTML = $("out").innerHTML + numList[rnd];
        }
        else {
            $("out").innerHTML = $("out").innerHTML + "　" + numList[rnd];
        }

        numList.splice(rnd, 1);
        console.log(numList.length);
        if (numList.length == 0) {
            alert("ルーレット終了。新しくルーレットをプレイするならページを更新してね");
            $("start").disabled = true;
        }
        return false;
    }

    $("view").innerHTML = numList[rnd];
    id = setTimeout("roulette()", 100);
}
