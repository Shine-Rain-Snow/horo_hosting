import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-celtic-detail',
  templateUrl: './celtic-detail.component.html',
  styleUrls: ['./celtic-detail.component.scss']
})
export class CelticDetailComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,
    private aRoute: ActivatedRoute) { }

  deck_mode;
  spread_mode;
  celtic_random_mode;
  deck_folder;
  celtic_imgPath = [];
  celtic_cardTitle = [];
  celtic_cardContent = [];
  //detail rider card content
  riderCard_txt = [
    {
      title: "THE CHARIOT",
      detail: `Love and relationships
              Your relationship has challenges yet you will find solution to your problems. You will overcome this difficult period. Now is the time to take control of your life.the cards can also show that you are confused and things are not moving forwards.do not except to be involve in an “on and off” relationship, be assertive. If the Chariot is next to a bad card, you may end up in living separately or breakup.
              Work and career:
              You can expect a breakthrough in a project. important decisions will bring more flow and positive changes. If the chariot is next to a bad card, expect financial problems and short period of uncertainty.
              `
    },
    {
      title: "THE DEATH",
      detail: `Love and relationships
               End. No recovery. bad relationship.no future. Widowhood. A loss. You will go through a deep life transformation. A life chapter is closing and there is no way back. A new period will start soon. The death card can sometime show fear of separation and worries about future. If it is next to a positive card, you are entering a new life cycle ! coming out of  a very bad period in your life.
               Work and career:
               You may need to leave the job or change your business. if the card is next to bad card you will get fired from job or force to leave. The card can show a loss. Things are not under your control. It is possible that you will eventually change your way. a change of office, premises, moving to a new place.
              `
    },
    {
      title: "THE DEVIL",
      detail: `Love and relationships
              The devil is a warning card. Obsessiveness. cheating. Your partner not honest. past relationship. The Devil spiritual lesson is to “learn to let go”. If you are a part of obsessive relationship then this is the time to quit. This card represents lies and betrayal, violent or forbidden passion. stuck in the past!  A person with evil intensions. Not love only financial interests or sex .if surrounded by bad cards it can show Black magic or jealousy! 
              Work and career:
              Bad partnership. extortion. Mafia. Black magic from people using you. Someone or something is holding you back. Beware of work colleges. a dispute in your work place. It will be a mistake to mix work with a personal relationship at the work place.  
              `
    },
    {
      title: "THE EMPEROR",
      detail: `Love and relationships
               A man in high position. boss. Legal issues, tax issues. a married man. you are attracted   to an older man or father figure; relationship with a married man. The Emperor card shows determination and courage and the need to be the leader. This card also presents delays in marriage plans. The negative side f the Emperor is aggression and over expression of power. If the card of the devil is next to the emperor it shows violent, aggressive person.
               Work and career:
              The boss, power, new job position, you are building your financial future. Public figure, a politician. If the Emperor card is next to negative cards it indicates tax problems, financial obstacles, problems with your boss at work, legal problems 
              `
    },
    {
      title: "THE EMPRESS",
      detail: `Love and relationships:
              A mother. Pregnancy, a married woman. Card of money mix with love. maybe you are connected to a materialistic person. The cards can show pregnancy and thought of having a child .If you are a single man expect marriage  in the near future. If you are a female, then this card represents your desire to have a child. Don’t be too materialistic If the Empress surrounded by negative  it indicate extra marriage  affairs or health issues like hormones and thyroid gland disorders.
              Work and career:
              Prosperity, richness and wealth.; it can show that buying a new house is a good choice now; material success is expected. If negative it can show a high family expenses and wasting money.it often show women working with you or issues dealing with a women boss. It’s a warning to not over indulge in the good things of life.
              `
    },
    {
      title: "THE FOOL",
      detail: `Love and relationships:
              You need time to yourself and some space to collect your thoughts. The fool card represents a start of a new relationship, a new beginning, a new chapter. the past do not serve you anymore! you need to be free now and focus on a fresh beginning. In fact, you might be thinking of pressing the proverbial “NEXT” button on the game of life. If you are in love right now, the fool card may be a warning to be careful and take things slowly! Or your partner is not as serious as you think or maybe you have a conflict between commitment and being free.
              Work and career:
              Expect the unexpected. The fool card points to some new directions also new opportunities. Anything is possible; be careful of hasty decisions and dangerous travel. Careful where you put your money or don’t be naïve when making your financial plans.
              `
    },
    {
      title: "THE HANGED_MAN",
      detail: `Love and relationships
              No marriage .Life full of compromising. Delays. Things are not quite clear right now frustration. things are  not in your hand !  You will have to make sacrifices. Even thought you feel that you are banging into a brick wall, be realistic and wait for right moment to act. If next to a bad card : victim of circumstances; boring life ,try to get rid of  guilty feelings.
              Work and career:
              Lazy. delays .it will take time until you get it. It’s a great card for artists and spiritual people. If in business then to get something good you will need to sacrifice something else. Although you feel the need for a change  it may be difficult to make it happen.do not ignore the important things that need to be done first.
              `
    },
    {
      title: "THE HERMIT",
      detail: `Love and relationships
              Expect to be disappoint in finding love ; it will take time to find your soul mate. don’t let your past bring you down. Worries and a person who got use to live alone. A person who is emotionally close . you need time out. If next to a positive card, your search for harmony will be fulfilled. Sometimes the card indicates that inner loneliness resides within your marriage relationship 
              Work and career:
              Spiritual approach is needed. A Guru. learn more before you start. Financial worries. Poverty. Don’t open this business if this card appears. You need to upgrade your current business. Change your ways or your whole work concept otherwise you will not make a living. The cards show you need to rest and rejuvenate your energy levels.
              `
    },
    {
      title: "THE HIEROPHANT",
      detail: `Love and relationships
              You will find a stable relationship. serious commitment. Marriage is in the cards. The Hierophant can show domestic and legal issues, issues relating to your marriage. If surrounded by bad cards, the hierophant indicates a bad marriage or a life with too many compromises.
              Work and career:
              Paper work ,legal case awaiting decision. If the hierophant card is next to a positive card it show education, good results ,a lawyer, accounting. University admissions will be accepted; visa and immigration process will be successful. If the card surrounded by bad cards, legal problems. You need to get a second opinion.
              `
    },
    {
      title: "THE HIGH PRIESTESS",
      detail: `Love and relationships:
              Listen to your instinct. your heart will lead you. this is a wisdom card. It can show an old soul or a person who is very mystic and sensitive, an artist . in many cases the card show your partner keeps secrets from you. The person is in bad mental state! it can also show low mental health or depression. mystery and past relationship might be the reason you will end up disappointed. Someone hiding some information. surprisingly the card can show a spiritual bond between you partner. Sacrifice and compromise are needed in order to overcome the current obstacles. If loneliness resides within your relationship, then you will need the courage to change it. keep delaying an emotional decision can be a mistake.
              Work and career:
              An intuitive approach is needed in order to succeed. You need to be more assertive and realistic. You must investigate the situation before taking any financial decision. If you are an artist, don’t be afraid to express your creativity. If your question was on profession, then art, spiritualism, psychology and social work suit you best.
              `
    },
    {
      title: "THE JUDGMENT",
      detail: `Love and relationships
              A court session. A past relationship is coming to hunt you. Your judgment day is a reminder to learn unconditional love and not to expect from others. Think if you want  to return to your previous relationship or  to let go forever. The card show great changes are coming your way. which are about to take place, will bring complete liberation into your life. You have been reborn and can see the light. If next to a bad card, you feel guilt and abandonment, which may lead you to a bad judgment
              Work and career:
              You are correcting past mistakes. Learning your lesson. partnership is ok only if both of you are investing the same amount of energy and money! You are going back to the roots. Think before you accepting a business offer. You will have some legal or financial problems to deal with.
              `
    },
    {
      title: "THE JUSTICE",
      detail: `Love and relationships
                You need to learn from your past mistakes. Your partner is very demanding. Divorce may be not far away. Legal problems or a court case. You keep looking for solutions to your problems. Tell the truth if you want forgiveness. Marriage problems. If next to a bad card, expect hard times or a painful separation ahead.
               Work and career:
                A contract. A lawyer. money and legal issues. New conditions. A letter from tax department. Family problems in business. You will need to make tough decisions; it will have a long-term effect. Be careful before you sign a contract or rental agreement. If next to a bad card you will lose a court case or get into debt.
               `
    },
    {
      title: "THE LOVERS",
      detail: `Love and relationships
              The lovers card shows love and passion. A new relationship. physical attraction. This card can also show that you need to make a choice; be faithful to your partner or get involve in anther relationship. It will always show that you need to control your passion. A past relationship might disturb your current relationship. If next to a bad card, your relationship may end up in a romantic triangle or a great conflict in your love life.
              Work and career:
              The lovers show a business choice. Relationship at work. Use your intuition to make this choice. Physical attraction to a work colleague. If  surrounded by bad cards, you may be cheated in business. 
              `
    },
    {
      title: "THE MAGICIAN",
      detail: `Love and relationships:  
              A relationship with huge potential. you are the one who can control the relationship. your partner brings you luck when it comes to money. It is time to take action! It  can show love and working together with you partner. You will start on a positive note and all your material goals will be fulfilled; the sky is the limit. If the Magician card have negative cards surround it, like for example THE DEVIL this means that your partner is playing with you or even try to manipulate you in the future. The Magician represents your ability to function and when this card is in the negative position, for example next to THE TOWER card it often shows sexual problems in love relationship or health issues.
              Work and career:
              Success and great opportunities await you. Financial success in banking, media or as a professional. You are the best in your profession and your skills will impress others. Expect to succeed in high studies, but be careful not to spread your energy over too many areas. If the Magician is surround by negative cards, then it shows money speculation and dishonesty in work or business.
              `
    },
    {
      title: "THE MOON",
      detail: `Love and relationships
              The Moon show your mental and emotional status. Depression. hurt feelings and no emotional stability. Don’t allow yourself to be totally depend on others. You feel disappointed and suffocated in your relationship. Your partner is not mentally stable or he is still thinking of his past relationship. The card can show medication are bad for you. You may live in fear or have unexpressed anger. If next to a bad card, it usually show mental illness, loneliness and a great fear to communicate.
              Work and career:
               Bad for business. bad for money. If you are an artist, the moon will show your creativity and your emotional creative side. You have a vision to become a success and it is not easy. This is basically a negative card that indicate dispute, arguments and bad decision-making. If next to a bad card you feel tired and disappointed from business partner or family.
              `
    },
    {
      title: "THE STAR",
      detail: `Love and relationships
              Soft. kindness. A sincere person. A bit innocent. inexperience or a gay relationship. Healing. doing things from the heart. a pure and innocent friendship with trust. Relationship without sex. It is about freedom, peace, serenity, trust and your space you live in. If next to a bad card, it indicates lake of passion and impotence.
              Work and career:
              The Star is a healing card, Great for spirituality, education and the expansion of knowledge. It indicates a brilliant future with a good vision into the future. Be optimistic. Work and study will be successful. If next to a bad card, your plans will not materialize. Laziness is against you. You will need to stand up on your rights or you will find yourself out of the job.
              `
    },
    {
      title: "THE STRENGTH",
      detail: `Love and relationships
              You need to see the different between what you want and what you can actually get. A positive sexual energy! physical attraction may not be enough to make this relationship stable. Don’t put pressure on you partner. they don’t want. If next to a bad card, it indicates a conflict, arguments and waste of energy.
              Work and career:
              Competition. things moving forward. A combination of two things. More than one business. a dynamic partnership; success in business can be short live, you must reduce your monthly expenses. don’t force your ideas onto others. If next to a bad card, expect problems with business partners, power struggle.
              `
    },
    {
      title: "THE SUN",
      detail: `Love and relationships
              Good health. Good lover. Happy personality. Success. The sun represent fulfillment of all your dreams.it can show a child or a new born. Success in your relationship is expected. Many moments of happiness and joy. You feel secure and have faith in the future. If next to a bad card, your happiness will be short live or your relationship will be based more on the material aspect and less emotions.
              Work and career:
              Wonderful times ahead. Success and good income. If next to the card wheel of fortune you will become famous. You will achieve huge growth and find financial security. If next to a bad card, don’t let success go to your head as the price of success may be high. Next to the card THE TOWER it show bad health in future.
              `
    },
    {
      title: "THE TEMPERANCE",
      detail: `Love and relationships
              Not sure! Don’t be in tow relationships. Making up after argument. Conditions in love life. You will get peace only if you compromise. Spiritually you need to be understanding have sympathy and empathy. This is a good time to make up with your partner. Tough to get a commitment. You will reach a dilemma where you need to chose between 2 partners.  
              Work and career:
              You need to adjust to something new. adapting to a new place /people. you need to take 2 jobs. If you continue to search for alternatives you will find what you are looking for. merging of 2 companies or a large expansion of your current business. If you use clever judgment you will be successful.  
              `
    },
    {
      title: "THE TOWER",
      detail: `Love and relationships
              Illness. short sickness. Unexpected changes due to family pressures. a health problem will affect your relationship. The Tower card indicate a period of conflict at home. Lots of pressures on you. It is important to understand that this card represents a temporary situation only. If the card is next to a bad card, it show health problems or a stormy relationship.
              Work and career:
              Moving a house. stormy weather. Danger in the night. The Tower card teaches how to change your life. the building cycle, the braking down cycle and rejuvenation. If you are in financial crises you will need great courage in order to make a change. In any event, expect a change for the worse and an increase in sudden expenses. If next to a positive card you can expect move to a new place. 
              `
    },
    {
      title: "THE WHEEL",
      detail: `Love and relationships
              Faith. destiny. good luck. Karmic relationship. A positive wind is blowing in your love life. Fortune and lucky person. A lucky proposal. A great opportunity! People from abroad. foreigner. Success in a new venture. If next to a bad card, a sudden bad twist of faith. Bad luck.
              Work and career:
              Timing is good. lucky period. High earnings. Positive change. a onetime opportunity is waiting for you. A brilliant move will bring you wealth. If this card is next to a bad card, its indicates danger, sudden accident, sudden and unpleasant change that will set you back.
              `
    },
    {
      title: "THE WORLD",
      detail: `Love and relationships
               End of a life cycle. Feeling complete. study abroad will be good for you. Travel far. Love will take you away from home. The World / Universe card however do not represent love or physical attraction. It is more the friendship and the prestige that involve in some relationship. it represents the daily routine, comforts and the financial stability that relationship brings you. If next to a bad card, you are getting bored  and suffer from the monotony of life.
               Work and career:
              Success abroad. Traveling for work. successful journey.
              International business. Immigration issues. Prosperity good progress and material security. You will need to take great  responsibility, this card  show creative involvement and show persistence. If next to a bad card, you will have difficulty in completing a project or a long chapter in your life is about to end
              `
    },
  ];

  //hermetic card detail
  hermeticCard_txt = [
    {
      title: "THE CHARIOT",
      detail: `typing here detail avout chariot`
    },
    {
      title: "THE DEATH",
      detail: `222`
    },
    {
      title: "THE DEVIL",
      detail: `333`
    },
    {
      title: "THE EMPEROR",
      detail: `444`
    },
    {
      title: "THE EMPRESS",
      detail: `555`
    },
    {
      title: "THE FOOL",
      detail: `666`
    },
    {
      title: "THE HANGED_MAN",
      detail: `777`
    },
    {
      title: "THE HEMIT",
      detail: `888`
    },
    {
      title: "THE HIEROPHANT",
      detail: `999`
    },
    {
      title: "THE HIGHPRIESTESS",
      detail: `10`
    },
    {
      title: "THE JUDGMENT",
      detail: `11`
    },
    {
      title: "THE JUSTICE",
      detail: `12`
    },
    {
      title: "THE LOVERS",
      detail: `13`
    },
    {
      title: "THE MAGICIAN",
      detail: `14`
    },
    {
      title: "THE MOON",
      detail: `15`
    },
    {
      title: "THE STAR",
      detail: `16`
    },
    {
      title: "THE STRENGTH",
      detail: `17`
    },
    {
      title: "THE SUN",
      detail: `18`
    },
    {
      title: "THE TEMPERANCE",
      detail: `19`
    },
    {
      title: "THE TOWER",
      detail: `20`
    },
    {
      title: "THE WHEEL",
      detail: `21`
    },
    {
      title: "THE WORLD",
      detail: `22`
    },
  ];

  //lernomand card detail
  lenormandCard_txt = [
    {
      title: "typing here title",
      detail: `typing here detail avout chariot`
    },
    {
      title: "222",
      detail: `222`
    },
    {
      title: "333",
      detail: `333`
    },
    {
      title: "444",
      detail: `444`
    },
    {
      title: "555",
      detail: `555`
    },
    {
      title: "666",
      detail: `666`
    },
    {
      title: "777",
      detail: `777`
    },
    {
      title: "888",
      detail: `888`
    },
    {
      title: "999",
      detail: `999`
    },
    {
      title: "10",
      detail: `10`
    },
    {
      title: "11",
      detail: `11`
    },
    {
      title: "12",
      detail: `12`
    },
    {
      title: "13",
      detail: `13`
    },
    {
      title: "14",
      detail: `14`
    },
    {
      title: "15",
      detail: `15`
    },
    {
      title: "16",
      detail: `16`
    },
    {
      title: "17",
      detail: `17`
    },
    {
      title: "18",
      detail: `18`
    },
    {
      title: "19",
      detail: `19`
    },
    {
      title: "20",
      detail: `20`
    },
    {
      title: "21",
      detail: `21`
    },
    {
      title: "22",
      detail: `22`
    },
    {
      title: "23",
      detail: `23`
    },
    {
      title: "24",
      detail: `24`
    },
    {
      title: "25",
      detail: `25`
    },
    {
      title: "26",
      detail: `26`
    },
    {
      title: "27",
      detail: `27`
    },
    {
      title: "28",
      detail: `28`
    },
    {
      title: "29",
      detail: `29`
    },
    {
      title: "30",
      detail: `30`
    },
    {
      title: "31",
      detail: `31`
    },
    {
      title: "32",
      detail: `32`
    },
    {
      title: "33",
      detail: `33`
    },
    {
      title: "34",
      detail: `34`
    },
    {
      title: "35",
      detail: `35`
    },
    {
      title: "36",
      detail: `36`
    },
  ];


  ngOnInit() {
  	this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(9);
    this.deck_mode = this.aRoute.snapshot.paramMap.get('deck_mode');
    this.spread_mode = this.aRoute.snapshot.paramMap.get('spread_mode');

    let tenCardNums = [];
    tenCardNums = this.sunService.getCelticTenCardNum();
    if(this.deck_mode == 1 ) {
      this.deck_folder = "ridercard";      
      for(let i=1; i<=10; i++) {   
        this.celtic_imgPath[i] = "assets/img/tarot/"+this.deck_folder+"/"+tenCardNums[i]+".png";
        this.celtic_cardTitle[i] = this.riderCard_txt[tenCardNums[i]-1].title;
        this.celtic_cardContent[i] = this.riderCard_txt[tenCardNums[i]-1].detail;
      }      
    } 
   
    if(this.deck_mode == 2) {
      this.deck_folder = "hermetic";     
      for(let i=1; i<=10; i++) {  
        this.celtic_imgPath[i] = "assets/img/tarot/"+this.deck_folder+"/"+tenCardNums[i]+".png";
        this.celtic_cardTitle[i] = this.hermeticCard_txt[tenCardNums[i]-1].title;
        this.celtic_cardContent[i] = this.hermeticCard_txt[tenCardNums[i]-1].detail;
      }      
    }
   
    if(this.deck_mode == 3) {
      this.deck_folder = "lenormand";      
      for(let i=1; i<=10; i++) {
        this.celtic_imgPath[i] = "assets/img/tarot/"+this.deck_folder+"/"+tenCardNums[i]+".jpg";
        this.celtic_cardTitle[i] = this.lenormandCard_txt[tenCardNums[i]-1].title;
        this.celtic_cardContent[i] = this.lenormandCard_txt[tenCardNums[i]-1].detail;
      }      
    }
    this.sunService.setCelticTenCardNum(tenCardNums);
  }

  goCelticMainPage() {
  	this.router.navigate(['/tarot/celtic-cards', {deck_mode:this.deck_mode, spread_mode:this.spread_mode, celtic_random_mode: 2}]); 
  } 

}
