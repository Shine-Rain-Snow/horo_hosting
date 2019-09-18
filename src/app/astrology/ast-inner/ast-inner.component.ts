import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-ast-inner',
  templateUrl: './ast-inner.component.html',
  styleUrls: ['./ast-inner.component.scss']
})
export class AstInnerComponent implements OnInit {

  constructor(private router: Router,
    public stateData: Globals, 
    private sunService: SunProgressService) { }
  
  sunsign_description = {
      "aries": `Career and finance:
      2019 will not be easy. Saturn at your career sector is a period.it is a hard-working period, it’s the only way you can get rewarded. Saturn will stay one more year in your career sector, brings work delays and frustration especially in work relationship. Saturn is also represent your most ambitious goals and responsibility’s, so this year you will want to prove everyone what you can really do!! As being Aries, you are a natural born fighter and when problems arise you will usually fight back and expect to correct things .as Saturn will probably bring you career challenges this year remember to adapt a diplomatic approach and avoid being verbally aggressive! Jupiter will be in your 9th house of education and traveling. it will bring you luck in study and during traveling! Until March 2019 your income is predicted to be the same, after august 2019 you will have a great chance to gain more respect and recognition for your professional work. If you are in the middle of a litigation battle try and offer a compromising solution, it can save you money and time!
      Love and relationships:
      Your love one will be very demanding and you will often feel forced to agree to his demands. Controversies related to family interference, properties or finance will frustrate you and you will end up spending time on trying to find a way out.2019 is a  year full of romantic adventures, you can easily fall in love again especially while being away from home! As a single, getting marry under family pressure will be tough. Planning a baby is recommended only if your marriage relationship is strong and you can afford it financially.`,
      
      "taurus": `Career and finance: 
      A year full of important events, lots of traveling, new people will enter your life. The planet Uranus enter your sign and will stay there for 7 years! A sudden work change is expecting for those born in the first 8 days of the sign. If you are born in the first week of the sign you will be the most affected this year. Expect drastic changes in all life aspects, changes can come in surprise and as an earth sign it is probably not going to be easy for you to deal with unexpected events! Your health is also a very important issue this year. You must avoid putting on weight and change your eating habits if needed! Taurus kids can easily develop throat infection while adults must reduce sugar intake and drink more water than usual. The year will bring  many unique opportunities for growth, especially intellectual growth. Business partnerships can suffer from tension and may even reach a breaking point.2019 is good for your finance, you will be able to pay your debts and funds will come from more than one source! Your company might offer you to relocate or give you a job title that will require more responsibility. You must go with the flow this year and be open  to any career change that may come your way.
      Love & Relationships:
      Your love life is looking good this year. You must move forward and refuse to go back to a past relationship! You are in a very emotional period and can easily fall in love this year. It may be someone whom you are long waiting to be with or a sudden encounter with a person who will change your life. If you are long expecting to get pregnant then 2019 is a great time to fulfil your dream of becoming a mother. A love affair with someone you know since last year will be tested this year .u need stability and marriage is likely to happen if you will feel secure enough. It is important to keep your personal life in privet and avoid involving family in your  final decisions.`,
      
      "gemini": `Career and finance:
      2019 is a very unusual year. The year is mostly important for your finance and positive for your personal life! Your main goals this year are to improve your work efficiency and manage carefully your savings! This will be a very demanding and hectic year for your career progress. Neptune in your career sector is a fantastic aspect for artists and those into spiritual activity! You might as well discover yourself in this period, turn a hobby into a profession or discover a new ability that was always doormat inside you. On the other hand you must be more careful as Neptune can bring illusions and a hasty financial decision that will lead to a great loss! so here you must progress slowly and consult with professionals before making any critical decision.Your work performance will greatly improve this year , you will have new ideas for a business startup and your creativity will impress everyone .if you are employed then you will see new people  joining your organization and you will be inspire by them. Some of you will quit from a business partnership and become in depended others will decide to move abroad for work. In the first half of the year, especially in March April you will doubts yourself and feel worry about your financial future yet after October 2019 you will find the right solutions too many of your problems. 
      Love & Relationships:
      This a very lucky year for relationships. Jupiter in your 7th house of relationship is really a fantastic period to find love and settle down! You can fall in love during traveling, study abroad or at your work place. You can also improve your current relationship and reach better understanding with your spouse. You will be more realistic and down to earth this year. Some of you will make a sudden decision to settle down. Your horoscope show settling down will probably be with someone who is very deferent then you. Your partner will have deferent spending habits and deferent expectation. Make sure to talk about it before you give a commitment. It’s a beautiful period for singles, love is waiting for you everywhere.`,
      
      "cancer" : `Career and finance:
      The year 2019 will be a challenging year. Get ready for hard work, you can build yourself again and put a strong foundation for a better future. Work will be very interesting and you will start learning new working methods or make new investments! If you recently started a new job then your work quality will be very good and you will impress others with your performance. Work relationship may become a major aspect whether you will succeed or fail!    During the year you may get a new work offer that will slowly become a new source of income. Saturn in your relationship sector will bring family tension and problems with someone you work with since the last few years. You will be successful in solving a legal problem and do good business while being away from the country. In the beginning of the year an existing business Partnership will need your attention and it is recommended to manage the problems without creating problems. You will need to exercise regularly and be careful not to put on weight .eating healthy food will be very important to keep your body in a healthy condition. Remember that work will require you to be official, professional and much more focused than ever before.it will be wise to wait until July 2019 before taking a decision to become a self-employed. 
      Love & Relationships: 
      With Saturn in your love and relationship sector 2019 will test your current relationship! Those recently started dating will find it difficult to get a commitment! Your partner will be very demanding and will expect you to get rid of bad habits. Disloyalty or being selfish this year can cause you to lose someone you really love! If you are already married then you will have to compromise and expect your partner to disagree with some of your career decisions. Try to be more patient and give your love one lots of attention .long distance relationship will not work this year!`,
      
      "leo": `Career and finance 
      2019 will a very exciting year. You will have new opportunity’s to grow, new people will enter your life and some of you will be able to achieve success. Especially artists ,politicians and spiritual leaders will be get recognition and respect more than ever before. Saturn will be in your health sector this year, you must get more sleeping hours and take more time to rest. Those who suffer from heart and blood disorders must be more aware and careful this year. You can expect to be successful in solving legal problems and expend your social friend circle. This is a great year to travel abroad for further study or to complete a creative project. People will look up to you and you will be very focus on your goals. Although your horoscope show new work opportunities and good luck, it will be difficult to maintain success and there will be challenges with people who will try to take advantage of your situation. Spending money without thinking or making dangerous speculations is not recommended this year!! if you are planning to buy a new car or sell an expensive property ,make sure to take advice from a good tax professional before you move on with the transaction. Moving a house will be costly and here you must take time to check the environment conditions like clean air and good neighbours otherwise you may regret later.
      Love & Relationships:
      As a single looking for love you can expect to be lucky this year. After years of being emotionally disappointed, confuse and uncommitted you will feel ready to settle down. Someone who disappointed you in the past may try to reconnect   or seek your attention but this may be too late for a comeback. Existing relationships will deepen and will eventually lead to marriage. Family will constantly interfere your decisions and this time you must follow your inner voice which is usually the right thing for you to do. Your best partners this year are Librans, Sagittarians and Gemini. `,
      
      "virgo": `Career and finance:
      This can be a very good year for your career and finance. Jupiter is in Sagittarius!  In your house and living sector will bring you luck in finding a better job, getting pregnant, moving a house or even getting married! You might suddenly decide to renovate a property, move to new country or just to a  more comfortable house .at work there going to be lots of changes! All the happening will not be in your hand, new people will join your work place and you will be on your best. Some of you will decide to leave the current job and the good news are that this time it will be quiet easy to find a better place .Working with foreigners and high profile people is on the cards this year. If you are running a business you will be inspired by new ideas that can bring you the success you are long waiting for. Starting a new business or investing in a new business will bring luck and put you on a better career path. If you are thinking of moving to a new place or renting a new apartment do the best you can to stick to your real budget and avoid making long distance contracts. March ,April may be difficult due to Mercury retro, during these weeks you must avoid big purchase  or sign any new contract. September October November will be financially good as funds will arrive from unexpected sources and will likely to improve your cash flow situation.
      Love and relationships:
      After a very disappointing 2018 You can now find love through the internet or during traveling .A relationship with someone who lives far from you will improve only if you are willing to spend more time together. It will be easy to settle down this year yet it will be wise not to give a second chance to someone who already proved to be unstable. If your marriage is cold and you are tiered of compromising then wait until you’re coming birthday before you get into final conclusions.`,

      "libra": `Libra 
      Career and finance:
      The last 2 years had been difficult for all Librans. Saturn in Capricorn will continue to bring professional and financial challenges throughout the year .you will have to invest much time in taking care of your family especially children’s and old parents who will need your support this year ! This is a period of self-realization, during this period you will realize that you must focus on building a better financial future and change your list of priorities.2019 will be a very intensive year, you will travel more and new people will enter your life. You will be successful in business negotiations and make new important contacts. Some of you will sell a property and use this money to clear up debts or start a new business. Many will move a house and start a new life in another city .buying a new car or a better house must be according to your budget! To avoid financial pressure in future you must manage your savings cleverly and consult with professional before entering a new business venture. If you are planning to start a new business partnership this year, make sure to put all terms and conditions in writing and leave yourself a written option to exit the business in case something will go wrong. You need to be very selective in choosing your business partners. You can expect the second half of the year to be a better period for your finance.
      Love and relationships:
      Until mid-2019 you will be busy with work and family issues. You can easily find love this year but in the same time you will often feel confuse and not ready to give a commitment. You will meet your partner during traveling or suddenly in an unexpected way. If you are in a relationship now you may find yourself under pressure to get marry and this will only raise more confusion. If your partner is behaving obsessively or a jealous person then you have to be very careful before you give a commitment.`,

      "scorpio": `Scorpio
      Career and finance:
      2019 will be better than last year. You will be on your best creativity and explorer new career opportunity’s. Jupiter in your financial sector will bring new career opportunities and new sources of income. Many of you will buy a new car, upgrade the current business or invest money in a new property a project you are working on since long time will start looking better now. Usually you are very conservative in your financial approach however this year you will probably try to take more risks. Your horoscope show that you might face a situation of disloyalty in your long time business. If you are running a business since many years then this is the time to bring new talented people into your business and test the loyalty of those working for you since long time. If you are born between 24t Oct. to 7th Nov. You may go through sudden relationship and family issues that will have major effect on the life style. If you are born in these dates then remember not leave a job because of personal issues, unless you already found another job! Throughout 2019, you will feel a growing self-confident which will make you do things your way. Success and great rewards are achievable if you maintain discipline and keep good relationship at work.
      Love and relationships:
      A very unique and exciting year for singles. Uranus recently entered your relationship sector for 7 years. You will seek freedom and insist on doing things your way! Those born in the first week of the sign will be most affected .your current relationship will be tested this year. Relationships with someone younger than you or married will be very unpredictable and can suddenly brake. If your marriage is unstable since few years then 2019 is not going to be an easy year. If one of you will decide to live separately you can expect to get into a new relationship shortly after the breakup , it may be someone known to you since long time.`,

      "sagi": `Sagittarius 
      Career and finance:
      2019 is a very special year for all Sagittarians. Jupiter in your sign will bring luck and plenty of opportunities to grow. This is also a good year for those of you into spirituality and art.as a teacher or a student you will grow intellectually and be successful in your exams. The weak point of this year will be your health and your current relationship. You might also need to take care of an old family member that will need your support. Jupiter in your sign will help you to improve work relationships .you will be able to make a significant career progress and find solutions to your work problems. You must be careful and very conservative in your approach to finance.do not take financial risk and when it come to your savings try and select the more safe opportunity’s and avoid speculations .Between March to June 2019 work relationships will be difficult and you may suddenly feel like leaving a job or apply a better job title. The period after September 2019 will be a better period for a job change as well as for investments. Your health can go down this year if you put of weight, drink too much or develop new bad habits.2019 will be the right time to visit the dentist and do your regular check-ups.
       Love and relationships:
      Jupiter in your sign will bring luck in finding new love .if in a relationship then you will be under pressure from your partner. You will need more freedom and will refuse to back down and compromise. news from children's or sudden pregnancy is predicted .Jupiter in your sign will help you to reveal secrets in your current relationship.no more fake attitude from others, you will insist on being authentic and will put others in their place. Controversies with family or things that will be revel this year can lead to sudden separation and great disappointment from someone you had trusted since a long time.`,

      "capricorn": `Capricorn 
      Career and finance:
      Saturn will continue to stay in your sign until March 2021.the last few years were not easy for you. Many of you felt and still feeling depress and disappointed of life. But Saturn is also the teacher and during the Saturn years you are learning an important life lesson and become more efficient. Eventually you will come out of this period stronger than ever before ,your life will be on a new path for success .Work will continue to be very demanding this year. Professionally you will be able to progress and overcome all the obstacles and even achieve success.in the second half of 2019 until mid-2020 many of you will decide to go for a major career change! This period will bring life changing events that will lead you to a better place in life. Financially this is a better year than last year. You will gain more control on your finance and find solution to a legal problem that is long disturbing your peace. During the year many of you will plan to sift to a new home while others will plan to buy or renovate a property. You must be careful with your savings and be more conservative with the financial support you give others. Buying a new property or taking an oversize bank loan can be risky this year.
      Love and relationships:
      As a single you will have to invest more time to keep your relationship happy. The present of Saturn in your sign mean you might see things different then before. You want a serious commitment and the fear to lose someone dear will grow .your current relationship can heal now or break forever. The life of those born in the second week of January will go through drastic changes. Others can find a new love and even decide to give a commitment. Marriage is on the cards this year yet it is very important to take a logical decision rather act out of fear of losing someone!`,

      "aquarius": `Aquarius 
      Career and finance:
      2019 will be better year than the last 2 years. Your job , business and financial situation will be effected by the market condition which is predicted to change in the coming years. You will have to be efficient and keep high liquidity! You will be very focus on your goals. The present of Jupiter in Sagittarius is good for your work and finance .your health can improve this year although it depend on your life style and being self-aware. You will be able to solve family problems and be more popular in whatever you do. This year you can  achieve professional success and even get recognition especially if you are doing a creative job, media or in the educational sectore.at work you will be able to progress and even get promoted .you will work with new people who will appreciate your good work and be able to express your talent and vast experience. This is a fantastic year to travel abroad for further study or to complete a creative project. If you are planning to buy a new house or sell a property make sure to consult with the best real-estate advocate or someone who will look after your legal rights. Before you move a house take time to check the environment conditions like clean air and good neighbours otherwise you may regret later.
      Love and relationships:
      Your personal life will affect your work and finance this year. If you are married then there are many issues that will need your attention this year! Some of you had to deal with an unfaithful partner or felt low due to being into a cold relationship. Note that secret relationship may end up in a final breakup this year. For many of you this is the time to decide whether you want to continue to be in your current relationship or move on in life .as a fix sign you will probably decide to ignore the problems or just let the time be the healer. If married then you need to improve your communication with your spouse and git rid of bad habits ,only that can heal your relationship.
      `,

      "pisces": `Pisces
      Career and finance:
      Since 2011 Neptune your ruling planet is in your sign. Neptune will stay there until Jan. 2026.during this period your life went and still going through so many changes.2019 will be a continuation to this period .Neptune move slowly so the changes will be deep effecting you mentally and spiritually. These changes will spread on a long period of time.in 2019 those born in the first week of march will be the most effected. Neptune brings great news for artist and those into spirituality. If you are one of those then you can expect to be on your best performance. You must also be aware that Neptune can bring great illusions and confusion in both your finance as well as in your relationship!  You must learn to be more down to earth, efficient and practical. Another good news is that Jupiter in your career sector this year is likely to bring new career opportunities, success in finding a job and even recognition. Note that only those who will be initiative and responsible will enjoy the benefit of Jupiter this year. Last year Mars was in retro causing you many financial problems yet this year your finance will start to stabilize and your income will start growing again. The coming years can be very problematic for those suffering from depression and mental illness, you must learn to relax and do the best you can avoid stressful situations.
      Love and relationships
      This is a very important year for relationship. You will need a change! The fear of commitment is likely to reduce this year. You will still feel confuse regarding your current relationship yet you will know that you need to take action. Many of you will walk away from a relationship that suffered countless breakups since last few years others will meet someone new and plan to settle down! Your best partners this year are Pisces, cancer and Capricorn!`,


  }
  next;
  ngOnInit() {
    
   let self = this;
   this.next = (AppConstants.SCROLLING_COUNT)/2;
   this.sunService.setAstVal((this.next-1) * 10);
   this.scrolling(self, this.next); 
   var hei = $("body").height();
   $(".sunsign_text").children().css({
   	height: hei*0.4+'px'	
   });
   $(".sunsign_img").children().css({
   	height: hei*0.3+'px'	
   })
    $(".left_img img").css("visibility", "visible");
    $(".left_img").css("background-size", "0 0");
    $(".left_img").hover(function(){
        $(this).css("background-size", "cover");
        $(".left_img img").css("visibility", "hidden");
    }, function(){
        $(this).css("background-size", "0 0");
        $(".left_img img").css("visibility", "visible");
    });
 
  }

  goAstrology() {
      this.router.navigate(['/astrology']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }

  scrolling(self, next) {
  	var defaults = {
        scrolling: true,
        amount: false
    };
    var x,left,down,newX,oldX,maxScrollLeft,am,amX,amL,leftElem,rightElem,currx,items,element,elements;
  	var element = $(".g-scrolling-carousel .items");
  	var amount = element.children(":first").outerWidth(true);
  	leftElem = $('<span />').addClass('jc-left');
    rightElem = $('<span />').addClass('jc-right');
    element.parent().append(leftElem).append(rightElem);

    maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
    left = element.scrollLeft();
    if(maxScrollLeft == left) {
        rightElem.hide();
    } else {
        rightElem.show();
    }
    if(left == 0) {
        leftElem.hide();
    } else {
        leftElem.show();
    }
    let curIndex = 0;
  	element.bind("DOMMouseScroll mousewheel", function (event) {    
        $(".item_container").bind("DOMMouseScroll mousewheel", function (event) {  
            curIndex = $(".item_container").index(this);
        });
        if(event.originalEvent.detail < 0) {
                //scroll down
            next--;
            //console.log($(".item_container").index(this));
            self.sunService.setAstVal(next * 10);
            if (curIndex == 0) {
                if(next < (AppConstants.SCROLLING_COUNT)/2 - 1) {
                    next = (AppConstants.SCROLLING_COUNT)/2 - 1;
                    self.sunService.setAstVal(next * 10);
                    self.goAstrology();
                }
            }
        }
        
        if(event.originalEvent.detail > 0) {
                //scroll up
            next++;
            self.sunService.setAstVal(next * 10);
            if (curIndex >= 5) {
                if(next > (AppConstants.SCROLLING_COUNT)) {
                    next = AppConstants.SCROLLING_COUNT;
                    self.sunService.setAboutVal(0);
                    self.goAbout();
                }
            }
        }

        
        var oEvent = event.originalEvent, 
        direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
        position = element.scrollLeft();
        position += direction > 0 ? -amount : amount;
        
        element.scrollLeft(position);
        event.preventDefault();
        maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
        left = element.scrollLeft();
        if(maxScrollLeft == left) {
            rightElem.fadeOut(200);
        } else {
            rightElem.fadeIn(200);
        }
        if(left == 0) {
            leftElem.fadeOut(200);
        } else {
            leftElem.fadeIn(200);
        }

    });
  }

  ngOnDestroy() {
    
  }

}
