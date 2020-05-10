var ac = {
  init : function () {
     // ac.init() = start the alarm clock

    // init current time
    ac.currenthr = document.getElementById("current-hr");
    ac.currentmin = document.getElementById("current-min");
    ac.currentsec = document.getElementById("current-sec");

    // init time selector
    ac.timerhr = ac.createSel(23);
    document.getElementById("pick-hr").appendChild(ac.timerhr);
    ac.timermin = ac.createSel(59);
    document.getElementById("pick-min").appendChild(ac.timermin);
    ac.timersec = ac.createSel(59);
    document.getElementById("pick-sec").appendChild(ac.timersec);

    // init buttons
    ac.set = document.getElementById("set");
    ac.set.addEventListener("click", ac.set);
    ac.reset = document.getElementById("reset");
    ac.reset.addEventListener("click", ac.reset);

    // init sound
    ac.sound = document.getElementById("alarm-sound");

    // start clock
    ac.alarm = null;
    setInterval(ac.tick, 1000);
  },

  createSel : function (max) {
    // createSel() = create selcectors

    var selector = document.createElement("select");
    for (var i = 0; i <= max; i++) {
      var option = document.createElement("option");
      i = ac.padzero(i);
      option.value = i;
      option.innerHTML = i;
      selector.appendChild(option);
    }
    return selector;
  },

  padzero : function (num) {
    // padzero() = supports selectors, 0 if < 10

    if (num < 10) {
      num = "0" + num;
    } else {
      num = num.toString();
    }
    return num;
  },

  tick : function () {
    // tick() = update current time

    // current time
    var now = new Date();
    var hr = ac.padzero(now.getHours());
    var min = ac.padzero(now.getMinutes());
    var sec = ac.padzero(now.getSeconds());

    // update clock
    ac.currenthr.innerHTML = hr;
    ac.currentmin.innerHTML = min;
    ac.currentsec.innerHTML = sec;

    // check and sound alarm
    if (ac.alarm != null) {
      now = hr + min + sec;
      if (now == ac.alarm) {
        document.getElementById("current-time".style.color = "red");
        if (ac.sound.paused) {
          ac.sound.play();
        }
      }
    }

  },

  set : function () {
    // set() = set alarm

    ac.alarm = ac.timerhr.value + ac.timermin.value + ac.timersec.value;
    ac.timerhr.disabled = true;
    ac.timermin.disabled = true;
    ac.timersec.disabled = true;
    ac.set.disabled = true;
    ac.reset.disabled = false;
  },

  reset : function () {
    // reset() = reset alarm

    if (!ac.sound.paused) {
      ac.sound.pause();
    }
    ac.alarm = null;
    ac.timerhr.disabled = false;
    ac.timermin.disabled = false;
    ac.timersec.disabled = false;
    ac.set.disabled = false;
    ac.reset.disabled = true;
  }
};

window.addEventListener("load", ac.init);
