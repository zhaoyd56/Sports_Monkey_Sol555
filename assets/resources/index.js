System.register("chunks:///_virtual/es.ts",["cc"],(function(e){var a;return{setters:[function(e){a=e.cclegacy}],execute:function(){a._RF.push({},"518a7KDbuBL27pIaqMYhANT","es",void 0);var o=window,i=e("languages",{loadTip:"Carga del juego",recordTitle:"Récords de las últimas 100 rondas",resultTextSuc:"Apuesta %b medalla en esta ronda y gana %w medalla",resultTextFail:"Adivinaste mal",btnMedalText:"Medallas",choseChampionNormalText:"Adivina el campeón",choseChampionChoseText:"Adivina el campeón",choseChampionRewardText:"<b>5.8x </b><color=#D3D3D3>medallas por acierto</color>",choseNotChampionNormalText:"Adivina el no campeón",choseNotChampionChoseText:"Adivina el no campeón",choseNotChampionRewardText:"<b>1.16x </b><color=#D3D3D3>medallas por acierto</color>",userScore:"Actualmente tengo %d medallas",gameStart:"Inicio del juego",gameTipChose:"Seleccione primero el atleta",gameTipScore:"El saldo es insuficiente",gameTipLogin:"Error al iniciar sesión, cierre la sesión y vuelva a iniciarla",gameTipWait:"El juego ha comenzado. Por favor, espere a la siguiente",monkeyName1:"Pirata",monkeyName2:"Pelirrojo",monkeyName3:"Caballero",monkeyName4:"Conejo",monkeyName5:"Capitán",monkeyName6:"Cowboy",myRecord:"Mis Registros",myChoice:"Mi elección",myBet:"Mi apuesta",betChampion:"Adivina el campeón",betNotChampion:"Adivina el no campeón",guessSuccess:"Lo adivinaste",guessFail:"Adivinaste mal",finalResult:"Campeón final",winScore:"Obtener"});o.languages||(o.languages={}),o.languages.es=i,a._RF.pop()}}}));

System.register("chunks:///_virtual/pt.ts",["cc"],(function(e){var o;return{setters:[function(e){o=e.cclegacy}],execute:function(){o._RF.push({},"b7101YrKstFxpJx6x3tyVi/","pt",void 0);var a=window,i=e("languages",{loadTip:"Carregamento do jogo",recordTitle:"Registros das últimas 100 rodadas",resultTextSuc:"Esta rodada aposta %b medalhas, ganha %w medalhas",resultTextFail:"Você adivinhou errado",btnMedalText:"Medalhas",choseChampionNormalText:"Adivinhe o campeão",choseChampionChoseText:"Adivinhe o campeão",choseChampionRewardText:"<b>5.8x </b><color=#D3D3D3>medalhas por palpites corretos </color>",choseNotChampionNormalText:"Adivinhe o não campeão",choseNotChampionChoseText:"Adivinhe o não campeão",choseNotChampionRewardText:"<b>1.16x </b><color=#D3D3D3>medalhas por palpites corretos </color>",userScore:"Atualmente tenho %d medalhas",gameStart:"Início do jogo",gameTipChose:"Por favor, selecione primeiro o atleta",gameTipScore:"O saldo é insuficiente",gameTipLogin:"Falha ao iniciar sessão, terminar sessão e iniciar sessão novamente",gameTipWait:"O jogo já começou, aguarde pelo próximo",monkeyName1:"Pirata",monkeyName2:"Ruiva",monkeyName3:"Cavaleiro",monkeyName4:"Coelho",monkeyName5:"Capitão",monkeyName6:"Cowboy",myRecord:"Meus Registros",myChoice:"Minha escolha",myBet:"Minhas apostas",betChampion:"Adivinhe o campeão",betNotChampion:"Adivinhe o não campeão",guessSuccess:"Você adivinhou",guessFail:"Você adivinhou errado",finalResult:"Campeão Final",winScore:"Obter"});a.languages||(a.languages={}),a.languages.pt=i,o._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./es.ts","./pt.ts","./zh.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(e){var o;return{setters:[function(e){o=e.cclegacy}],execute:function(){o._RF.push({},"f2a5eJhfo1MWqGU4jSYUwFS","zh",void 0);var a=window,t=e("languages",{loadTip:"游戏加载中",recordTitle:"近100场冠军数据统计",resultTextSuc:"本期投入勋章 %b,获得勋章 %w",resultTextFail:"竞猜失败，请再接再厉",btnMedalText:"勋章",choseChampionNormalText:"谁是冠军",choseChampionChoseText:"谁是冠军",choseChampionRewardText:"<color=#D3D3D3>猜对得 </color><b>5.8</b><color=#D3D3D3> 倍勋章</color>",choseNotChampionNormalText:"谁不是冠军",choseNotChampionChoseText:"谁不是冠军",choseNotChampionRewardText:"<color=#D3D3D3>猜对得 </color><b>1.16</b><color=#D3D3D3> 倍勋章</color>",userScore:"当前拥有勋章 %d 个",gameStart:"秒后比赛开始",gameTipChose:"请先选择运动员",gameTipScore:"余额不足",gameTipLogin:"登录失败,退出游戏重新登录",gameTipWait:"游戏已开始，请等待下一场",monkeyName1:"海盗猿",monkeyName2:"红发猿",monkeyName3:"骑士猿",monkeyName4:"兔头猿",monkeyName5:"船长猿",monkeyName6:"牛仔猿",myRecord:"我的记录",myChoice:"我的选择",myBet:"我的投注",betChampion:"猜冠军",betNotChampion:"猜不是冠军",guessSuccess:"你猜对了",guessFail:"你猜错了",finalResult:"最终冠军",winScore:"获得"});a.languages||(a.languages={}),a.languages.zh=t,o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});