// pages/news/news.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:'全部',
        isActive:true,
      },
      {
        id: 1,
        name: '健康资讯',
        isActive: false,
      },
      {
        id: 2,
        name: '美食热点',
        isActive: false,
      },
      {
        id: 3,
        name: '饮食知识',
        isActive: false,
      }
    ],
    news:[
      {title:"蛋糕在家轻松做，不加任何添加剂，仨鸡蛋就搞定，香甜松软真好吃",
       date:"2020-07-23",
       time:"14:00",
       read:271,
       url:"https://s1.ax1x.com/2020/08/21/dtjPdf.png",
       content:"前一阵做了几个烟囱模具戚风蛋糕，都没有烤出漂亮的裂纹，今天我不死心继续挑战，就不信做不出漂亮的爆炸头的样子来。功夫不负有心人，今天做的终于出来个大爆炸头，看着好高兴呀！必须全方位给它展示展示嘿嘿。我总结了一下前几次没裂开的原因可能有几点，一个是之前我用的是红糖，打发完的蛋白霜不太稳定可能有点消泡了，所以蛋糕涨的不够猛烈，再一个就是我用的是粗粮蛋糕粉，似乎也没有面粉做的蛋糕膨胀系数高，其实做蛋糕裂不裂真的无所谓，吃着都是很好吃的，咱自己做的蛋糕没有添加剂，真的是鸡蛋的香味，比买的强百倍。"
      },
      {title:"中式古风奶茶别有一番韵味，这才是纯粹的中国风",
      date:"2020-07-22",
       time:"15:00",
       read: 187,
       url:"https://s1.ax1x.com/2020/08/21/dtjio8.png",
       content:"茶早已成为中国人的习惯。南塘畔融合了中国的茶文化。提出“简单喝好茶，让生活慢一点，再慢一点”的口号，倡导慢慢品茶的理念。同时南塘畔是一个兼具“时尚与复古”的中式古风奶茶品牌，不断向顾客推出独特、精致、新颖、绿色的奶茶产品，更为消费者创造高品质的休闲空间。"
      },
      {title:"几种常见咖啡自制简易做法",
      date:"2020-06-02",
       time:"14:30",
       read:  151,
       url:"https://s1.ax1x.com/2020/08/21/dtvGAf.jpg",
       content:"1.黑咖啡（black coffee）：用直接用咖啡豆烧制的咖啡，不加奶等会影响咖啡原味的饮用方式。 2.浓缩咖啡（Espresso）：意式浓缩咖啡，以热水借由高压冲过研磨成很细的咖啡末末冲煮出咖啡。3.美式咖啡（Americano）：浓缩咖啡(Espresso) + 大量热水，和上面说的Caffè lungo类似。4.卡布奇诺（Cappuccino）：1/3通常咖啡(Espresso)+ 1/3牛奶+ 1/3牛奶沫,上面再撒点cocoa粉。5.拿铁咖啡（Latte）：浓缩咖啡(Espresso) + 两份以上的热牛奶。6.摩卡咖啡（Caffè Mocha）：这个是我喜欢的，其实就是拿铁再混上巧克力，也就是咖啡+牛奶+巧克力...."
      },
        {title:"哪些啤酒谣言还在飞？权威专家为你解读啤酒真相",
        date:"2020-06-25",
         time:"14:30",
         read:151,
         url:"https://s1.ax1x.com/2020/08/21/dtsWCQ.jpg",
         content:"在公众的普遍认知中，“喝啤酒导致痛风”是流传广、为普遍的一种说法。这种说法有科学依据吗？事实真相究竟如何？专家指出，啤酒嘌呤含量高导致痛风发病率高，这是不正确的说法。中国中医科学院基础理论研究所教授于智敏表示，痛风与啤酒的关系要分成两部分来看，一是喝啤酒能不能导致痛风，二是痛风病人能不能喝啤酒，不能一概而论。痛风患者是嘌呤代谢失常，临床上要求禁用或慎用啤酒。而喝啤酒会不会导致痛风？导致痛风病的原因是非常多的，和啤酒并没有直接关联。对于那些嘌呤代谢失常的人，处在痛风病发作前期，过量饮酒导致人体酒精代谢失常，会诱发痛风。所以不恰当地、过量饮酒是主因。"
        },
      {title:"科学家质疑无糖饮料的“健康好处”",
      date:"2020-05-22",
       time:"11:30",
       read:  168,
       url:"https://s1.ax1x.com/2020/08/21/dts24g.jpg",
       content:"在英国帝国理工学院日前发布的一篇文章中，科学家对当前流行的认为无糖饮料更利于健康的观点提出质疑，文章提到，尽管目前没有直接证据显示无糖饮料会增加饮用者的体重，但他们也没找到证据证明与含糖饮料相比，无糖饮料有助减轻体重或避免体重增加。此外，还有一种担忧是由于无糖饮料会刺激饮用者的甜味受体，很可能会引起他们的“补偿性食物摄入”，再加上饮用者下意识地认为无糖饮料是低热量饮品，终可能会让他们放开胃口进食更多其他食物，从而增加他们体重上升以及患上与肥胖相关疾病的可能性。这篇文章的作者包括帝国理工学院以及巴西的圣保罗大学和佩洛塔斯联邦大学的学者。文章作者之一、佩洛塔斯联邦大学学者玛丽亚·卡罗利纳·博尔热斯说，缺乏无糖饮料对健康影响的证据，以及由饮料行业资助的一些相关研究可能会误导消费者，这两点因素都应在探讨无糖饮料是否是含糖饮料的理想替代品时得到足够重视。"
      },
      {title:"互联网+”安全食品溯源服务体系",
      date:"2020-05-20",
       time:"14:30",
       read:  158,
       url:"https://s1.ax1x.com/2020/08/21/dtjSsI.jpg",
       content:"新华网北京11月9日电(记者高亢)近日，记者从中国农业国际合作促进会获悉，“互联网+”安全食品溯源服务体系在京正式启动。业内专家认为，运用“互联网+”融合大数据建立的安全食品溯源体系，将有利推动新《食品安全法》顺利实施，对于解决中国食品安全问题是有益探索。据中国农业国际合作促进会副会长、玖陆零电子商务有限公司董事长刘崇森介绍，该“互联网+安全食品溯源体系”是由国家工业与信息化部与玖陆零电子商务有限公司共建的“国家食品工业互联网创新服务平台”。用互联网+安全食品认证、追溯体系技术、安全食品证明商标授权，完成互联网+工业制造，以解决食品安全溯源问题。"
      }
    ],
    news_two:[
      {title:"哪些啤酒谣言还在飞？权威专家为你解读啤酒真相",
      date:"2020-06-25",
       time:"14:30",
       read:151,
       url:"https://s1.ax1x.com/2020/08/21/dtsWCQ.jpg",
       content:"在公众的普遍认知中，“喝啤酒导致痛风”是流传广、为普遍的一种说法。这种说法有科学依据吗？事实真相究竟如何？专家指出，啤酒嘌呤含量高导致痛风发病率高，这是不正确的说法。中国中医科学院基础理论研究所教授于智敏表示，痛风与啤酒的关系要分成两部分来看，一是喝啤酒能不能导致痛风，二是痛风病人能不能喝啤酒，不能一概而论。痛风患者是嘌呤代谢失常，临床上要求禁用或慎用啤酒。而喝啤酒会不会导致痛风？导致痛风病的原因是非常多的，和啤酒并没有直接关联。对于那些嘌呤代谢失常的人，处在痛风病发作前期，过量饮酒导致人体酒精代谢失常，会诱发痛风。所以不恰当地、过量饮酒是主因。"
      }, 
      {title:"科学家质疑无糖饮料的“健康好处”",
      date:"2020-05-22",
       time:"11:30",
       read:  168,
       url:"https://s1.ax1x.com/2020/08/21/dts24g.jpg",
       content:"在英国帝国理工学院日前发布的一篇文章中，科学家对当前流行的认为无糖饮料更利于健康的观点提出质疑，文章提到，尽管目前没有直接证据显示无糖饮料会增加饮用者的体重，但他们也没找到证据证明与含糖饮料相比，无糖饮料有助减轻体重或避免体重增加。此外，还有一种担忧是由于无糖饮料会刺激饮用者的甜味受体，很可能会引起他们的“补偿性食物摄入”，再加上饮用者下意识地认为无糖饮料是低热量饮品，终可能会让他们放开胃口进食更多其他食物，从而增加他们体重上升以及患上与肥胖相关疾病的可能性。这篇文章的作者包括帝国理工学院以及巴西的圣保罗大学和佩洛塔斯联邦大学的学者。文章作者之一、佩洛塔斯联邦大学学者玛丽亚·卡罗利纳·博尔热斯说，缺乏无糖饮料对健康影响的证据，以及由饮料行业资助的一些相关研究可能会误导消费者，这两点因素都应在探讨无糖饮料是否是含糖饮料的理想替代品时得到足够重视。"
      },
      {title:"互联网+”安全食品溯源服务体系",
      date:"2020-05-20",
       time:"14:30",
       read:  158,
       url:"https://s1.ax1x.com/2020/08/21/dtjSsI.jpg",
       content:"新华网北京11月9日电(记者高亢)近日，记者从中国农业国际合作促进会获悉，“互联网+”安全食品溯源服务体系在京正式启动。业内专家认为，运用“互联网+”融合大数据建立的安全食品溯源体系，将有利推动新《食品安全法》顺利实施，对于解决中国食品安全问题是有益探索。据中国农业国际合作促进会副会长、玖陆零电子商务有限公司董事长刘崇森介绍，该“互联网+安全食品溯源体系”是由国家工业与信息化部与玖陆零电子商务有限公司共建的“国家食品工业互联网创新服务平台”。用互联网+安全食品认证、追溯体系技术、安全食品证明商标授权，完成互联网+工业制造，以解决食品安全溯源问题。"
      }
    ],
    news_three:[
      {title:"几种常见咖啡自制简易做法",
      date:"2020-06-02",
       time:"14:30",
       read:  151,
       url:"https://s1.ax1x.com/2020/08/21/dtvGAf.jpg",
       content:"1.黑咖啡（black coffee）：用直接用咖啡豆烧制的咖啡，不加奶等会影响咖啡原味的饮用方式。 2.浓缩咖啡（Espresso）：意式浓缩咖啡，以热水借由高压冲过研磨成很细的咖啡末末冲煮出咖啡。3.美式咖啡（Americano）：浓缩咖啡(Espresso) + 大量热水，和上面说的Caffè lungo类似。4.卡布奇诺（Cappuccino）：1/3通常咖啡(Espresso)+ 1/3牛奶+ 1/3牛奶沫,上面再撒点cocoa粉。5.拿铁咖啡（Latte）：浓缩咖啡(Espresso) + 两份以上的热牛奶。6.摩卡咖啡（Caffè Mocha）：这个是我喜欢的，其实就是拿铁再混上巧克力，也就是咖啡+牛奶+巧克力...."
      },
      {title:"蛋糕在家轻松做，不加任何添加剂，仨鸡蛋就搞定，香甜松软真好吃",
       date:"2020-07-23",
       time:"14:00",
       read:271,
       url:"https://s1.ax1x.com/2020/08/21/dtjPdf.png",
       content:"前一阵做了几个烟囱模具戚风蛋糕，都没有烤出漂亮的裂纹，今天我不死心继续挑战，就不信做不出漂亮的爆炸头的样子来。功夫不负有心人，今天做的终于出来个大爆炸头，看着好高兴呀！必须全方位给它展示展示嘿嘿。我总结了一下前几次没裂开的原因可能有几点，一个是之前我用的是红糖，打发完的蛋白霜不太稳定可能有点消泡了，所以蛋糕涨的不够猛烈，再一个就是我用的是粗粮蛋糕粉，似乎也没有面粉做的蛋糕膨胀系数高，其实做蛋糕裂不裂真的无所谓，吃着都是很好吃的，咱自己做的蛋糕没有添加剂，真的是鸡蛋的香味，比买的强百倍。"
      },
      {title:"中式古风奶茶别有一番韵味，这才是纯粹的中国风",
      date:"2020-07-22",
       time:"15:00",
       read: 187,
       url:"https://s1.ax1x.com/2020/08/21/dtjio8.png",
       content:"茶早已成为中国人的习惯。南塘畔融合了中国的茶文化。提出“简单喝好茶，让生活慢一点，再慢一点”的口号，倡导慢慢品茶的理念。同时南塘畔是一个兼具“时尚与复古”的中式古风奶茶品牌，不断向顾客推出独特、精致、新颖、绿色的奶茶产品，更为消费者创造高品质的休闲空间。"
      }
    ],
    news_four:[
      {title:"互联网+”安全食品溯源服务体系",
      date:"2020-05-20",
       time:"14:30",
       read:  158,
       url:"https://s1.ax1x.com/2020/08/21/dtjSsI.jpg",
       content:"新华网北京11月9日电(记者高亢)近日，记者从中国农业国际合作促进会获悉，“互联网+”安全食品溯源服务体系在京正式启动。业内专家认为，运用“互联网+”融合大数据建立的安全食品溯源体系，将有利推动新《食品安全法》顺利实施，对于解决中国食品安全问题是有益探索。据中国农业国际合作促进会副会长、玖陆零电子商务有限公司董事长刘崇森介绍，该“互联网+安全食品溯源体系”是由国家工业与信息化部与玖陆零电子商务有限公司共建的“国家食品工业互联网创新服务平台”。用互联网+安全食品认证、追溯体系技术、安全食品证明商标授权，完成互联网+工业制造，以解决食品安全溯源问题。"
      },
      {title:"几种常见咖啡自制简易做法",
      date:"2020-06-02",
       time:"14:30",
       read:  151,
       url:"https://s1.ax1x.com/2020/08/21/dtvGAf.jpg",
       content:"1.黑咖啡（black coffee）：用直接用咖啡豆烧制的咖啡，不加奶等会影响咖啡原味的饮用方式。 2.浓缩咖啡（Espresso）：意式浓缩咖啡，以热水借由高压冲过研磨成很细的咖啡末末冲煮出咖啡。3.美式咖啡（Americano）：浓缩咖啡(Espresso) + 大量热水，和上面说的Caffè lungo类似。4.卡布奇诺（Cappuccino）：1/3通常咖啡(Espresso)+ 1/3牛奶+ 1/3牛奶沫,上面再撒点cocoa粉。5.拿铁咖啡（Latte）：浓缩咖啡(Espresso) + 两份以上的热牛奶。6.摩卡咖啡（Caffè Mocha）：这个是我喜欢的，其实就是拿铁再混上巧克力，也就是咖啡+牛奶+巧克力...."
      },
      {title:"中式古风奶茶别有一番韵味，这才是纯粹的中国风",
      date:"2020-07-22",
       time:"15:00",
       read: 187,
       url:"https://s1.ax1x.com/2020/08/21/dtjio8.png",
       content:"茶早已成为中国人的习惯。南塘畔融合了中国的茶文化。提出“简单喝好茶，让生活慢一点，再慢一点”的口号，倡导慢慢品茶的理念。同时南塘畔是一个兼具“时尚与复古”的中式古风奶茶品牌，不断向顾客推出独特、精致、新颖、绿色的奶茶产品，更为消费者创造高品质的休闲空间。"
      },
      {title:"蛋糕在家轻松做，不加任何添加剂，仨鸡蛋就搞定，香甜松软真好吃",
      date:"2020-07-23",
      time:"14:00",
      read:271,
      url:"https://s1.ax1x.com/2020/08/21/dtjPdf.png",
      content:"前一阵做了几个烟囱模具戚风蛋糕，都没有烤出漂亮的裂纹，今天我不死心继续挑战，就不信做不出漂亮的爆炸头的样子来。功夫不负有心人，今天做的终于出来个大爆炸头，看着好高兴呀！必须全方位给它展示展示嘿嘿。我总结了一下前几次没裂开的原因可能有几点，一个是之前我用的是红糖，打发完的蛋白霜不太稳定可能有点消泡了，所以蛋糕涨的不够猛烈，再一个就是我用的是粗粮蛋糕粉，似乎也没有面粉做的蛋糕膨胀系数高，其实做蛋糕裂不裂真的无所谓，吃着都是很好吃的，咱自己做的蛋糕没有添加剂，真的是鸡蛋的香味，比买的强百倍。"
     },
        {title:"哪些啤酒谣言还在飞？权威专家为你解读啤酒真相",
        date:"2020-06-25",
         time:"14:30",
         read:151,
         url:"https://s1.ax1x.com/2020/08/21/dtsWCQ.jpg",
         content:"在公众的普遍认知中，“喝啤酒导致痛风”是流传广、为普遍的一种说法。这种说法有科学依据吗？事实真相究竟如何？专家指出，啤酒嘌呤含量高导致痛风发病率高，这是不正确的说法。中国中医科学院基础理论研究所教授于智敏表示，痛风与啤酒的关系要分成两部分来看，一是喝啤酒能不能导致痛风，二是痛风病人能不能喝啤酒，不能一概而论。痛风患者是嘌呤代谢失常，临床上要求禁用或慎用啤酒。而喝啤酒会不会导致痛风？导致痛风病的原因是非常多的，和啤酒并没有直接关联。对于那些嘌呤代谢失常的人，处在痛风病发作前期，过量饮酒导致人体酒精代谢失常，会诱发痛风。所以不恰当地、过量饮酒是主因。"
        },
      {title:"科学家质疑无糖饮料的“健康好处”",
      date:"2020-05-22",
       time:"11:30",
       read:  168,
       url:"https://s1.ax1x.com/2020/08/21/dts24g.jpg",
       content:"在英国帝国理工学院日前发布的一篇文章中，科学家对当前流行的认为无糖饮料更利于健康的观点提出质疑，文章提到，尽管目前没有直接证据显示无糖饮料会增加饮用者的体重，但他们也没找到证据证明与含糖饮料相比，无糖饮料有助减轻体重或避免体重增加。此外，还有一种担忧是由于无糖饮料会刺激饮用者的甜味受体，很可能会引起他们的“补偿性食物摄入”，再加上饮用者下意识地认为无糖饮料是低热量饮品，终可能会让他们放开胃口进食更多其他食物，从而增加他们体重上升以及患上与肥胖相关疾病的可能性。这篇文章的作者包括帝国理工学院以及巴西的圣保罗大学和佩洛塔斯联邦大学的学者。文章作者之一、佩洛塔斯联邦大学学者玛丽亚·卡罗利纳·博尔热斯说，缺乏无糖饮料对健康影响的证据，以及由饮料行业资助的一些相关研究可能会误导消费者，这两点因素都应在探讨无糖饮料是否是含糖饮料的理想替代品时得到足够重视。"
      }
    ],
  },

  myTest:function(e){
    console.log(e.currentTarget.dataset.myid);
    let ss=JSON.stringify(e.currentTarget.dataset.myid);
    wx.navigateTo({
      url: '../../pages/text/text?id='+ss
    })
  },
  

  changeTab(e){
    // console.log(e)
    let index = e.currentTarget.dataset.index;
    let {tabs} = this.data;
    tabs.forEach((item)=>{
      item.id===index ? item.isActive=true : item.isActive=false;
    });
    this.setData({
      tabs
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})