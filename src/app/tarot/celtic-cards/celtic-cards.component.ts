import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';


@Component({
  selector: 'app-celtic-cards',
  templateUrl: './celtic-cards.component.html',
  styleUrls: ['./celtic-cards.component.scss']
})
export class CelticCardsComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,
    private aRoute: ActivatedRoute) { }

  deck_mode;
  spread_mode;
  celtic_random_mode;
  celtic_imgPath = [];
  celtic_cardTitle = [];
  celtic_cardContent = [];
  deck_folder;
  riderImgURL;
  hermeticImgURL;
  //detail rider card content
  riderCard_txt = [
    {
      title: "The Chariot",
      detail1: `Your relationship has challenges yet you will find solution to your problems. You will overcome this difficult period. Now is the time to take control of your life.the cards can also show that you are confused and things are not moving forwards.do not except to be involve in an “on and off” relationship, be assertive. If the Chariot is next to a bad card, you may end up in living separately or breakup.`,
      detail2: `You can expect a breakthrough in a project. important decisions will bring more flow and positive changes. If the chariot is next to a bad card, expect financial problems and short period of uncertainty.`,
    },
    {
      title: "Death",
      detail1: `End. No recovery. bad relationship.no future. Widowhood. A loss. You will go through a deep life transformation. A life chapter is closing and there is no way back. A new period will start soon. The death card can sometime show fear of separation and worries about future. If it is next to a positive card, you are entering a new life cycle ! coming out of  a very bad period in your life.`,
      detail2: `You may need to leave the job or change your business. if the card is next to bad card you will get fired from job or force to leave. The card can show a loss. Things are not under your control. It is possible that you will eventually change your way. a change of office, premises, moving to a new place.`,
    },
    {
      title: "The Devil",
      detail1: `The devil is a warning card. Obsessiveness. cheating. Your partner not honest. past relationship. The Devil spiritual lesson is to “learn to let go”. If you are a part of obsessive relationship then this is the time to quit. This card represents lies and betrayal, violent or forbidden passion. stuck in the past!  A person with evil intensions. Not love only financial interests or sex .if surrounded by bad cards it can show Black magic or jealousy!`, 
      detail2:`Bad partnership. extortion. Mafia. Black magic from people using you. Someone or something is holding you back. Beware of work colleges. a dispute in your work place. It will be a mistake to mix work with a personal relationship at the work place.`  
    },
    {
      title: "The Emperor",
      detail1: `A man in high position. boss. Legal issues, tax issues. a married man. you are attracted   to an older man or father figure; relationship with a married man. The Emperor card shows determination and courage and the need to be the leader. This card also presents delays in marriage plans. The negative side f the Emperor is aggression and over expression of power. If the card of the devil is next to the emperor it shows violent, aggressive person.`,
      detail2: `The boss, power, new job position, you are building your financial future. Public figure, a politician. If the Emperor card is next to negative cards it indicates tax problems, financial obstacles, problems with your boss at work, legal problems `
              
    },
    {
      title: "The Empress",
      detail1: `A mother. Pregnancy, a married woman. Card of money mix with love. maybe you are connected to a materialistic person. The cards can show pregnancy and thought of having a child .If you are a single man expect marriage  in the near future. If you are a female, then this card represents your desire to have a child. Don’t be too materialistic If the Empress surrounded by negative  it indicate extra marriage  affairs or health issues like hormones and thyroid gland disorders.`,
      detail2: `Prosperity, richness and wealth.; it can show that buying a new house is a good choice now; material success is expected. If negative it can show a high family expenses and wasting money.it often show women working with you or issues dealing with a women boss. It’s a warning to not over indulge in the good things of life.`
              
    },
    {
      title: "The Fool",
      detail1: `You need time to yourself and some space to collect your thoughts. The fool card represents a start of a new relationship, a new beginning, a new chapter. the past do not serve you anymore! you need to be free now and focus on a fresh beginning. In fact, you might be thinking of pressing the proverbial “NEXT” button on the game of life. If you are in love right now, the fool card may be a warning to be careful and take things slowly! Or your partner is not as serious as you think or maybe you have a conflict between commitment and being free.`,
      detail2: `Expect the unexpected. The fool card points to some new directions also new opportunities. Anything is possible; be careful of hasty decisions and dangerous travel. Careful where you put your money or don’t be naïve when making your financial plans.`,
              
    },
    {
      title: "The Hanged Man",
      detail1: `No marriage .Life full of compromising. Delays. Things are not quite clear right now frustration. things are  not in your hand !  You will have to make sacrifices. Even thought you feel that you are banging into a brick wall, be realistic and wait for right moment to act. If next to a bad card : victim of circumstances; boring life ,try to get rid of  guilty feelings.`,
      detail2:`Lazy. delays .it will take time until you get it. It’s a great card for artists and spiritual people. If in business then to get something good you will need to sacrifice something else. Although you feel the need for a change  it may be difficult to make it happen.do not ignore the important things that need to be done first.`
              
    },
    {
      title: "The Hermit",
      detail1: `Expect to be disappoint in finding love ; it will take time to find your soul mate. don’t let your past bring you down. Worries and a person who got use to live alone. A person who is emotionally close . you need time out. If next to a positive card, your search for harmony will be fulfilled. Sometimes the card indicates that inner loneliness resides within your marriage relationship`,
      detail2:`Spiritual approach is needed. A Guru. learn more before you start. Financial worries. Poverty. Don’t open this business if this card appears. You need to upgrade your current business. Change your ways or your whole work concept otherwise you will not make a living. The cards show you need to rest and rejuvenate your energy levels.`
    },
    {
      title: "The Hierophant",
      detail1: `You will find a stable relationship. serious commitment. Marriage is in the cards. The Hierophant can show domestic and legal issues, issues relating to your marriage. If surrounded by bad cards, the hierophant indicates a bad marriage or a life with too many compromises.`,
      detail2: `Paper work ,legal case awaiting decision. If the hierophant card is next to a positive card it show education, good results ,a lawyer, accounting. University admissions will be accepted; visa and immigration process will be successful. If the card surrounded by bad cards, legal problems. You need to get a second opinion.`,
    },
    {
      title: "The High Priestess",
      detail1: `Listen to your instinct. your heart will lead you. this is a wisdom card. It can show an old soul or a person who is very mystic and sensitive, an artist . in many cases the card show your partner keeps secrets from you. The person is in bad mental state! it can also show low mental health or depression. mystery and past relationship might be the reason you will end up disappointed. Someone hiding some information. surprisingly the card can show a spiritual bond between you partner. Sacrifice and compromise are needed in order to overcome the current obstacles. If loneliness resides within your relationship, then you will need the courage to change it. keep delaying an emotional decision can be a mistake.`,
      detail2: `An intuitive approach is needed in order to succeed. You need to be more assertive and realistic. You must investigate the situation before taking any financial decision. If you are an artist, don’t be afraid to express your creativity. If your question was on profession, then art, spiritualism, psychology and social work suit you best.`,
    },
    {
      title: "Judgment",
      detail1: `A court session. A past relationship is coming to hunt you. Your judgment day is a reminder to learn unconditional love and not to expect from others. Think if you want  to return to your previous relationship or  to let go forever. The card show great changes are coming your way. which are about to take place, will bring complete liberation into your life. You have been reborn and can see the light. If next to a bad card, you feel guilt and abandonment, which may lead you to a bad judgment`,
      detail2: `You are correcting past mistakes. Learning your lesson. partnership is ok only if both of you are investing the same amount of energy and money! You are going back to the roots. Think before you accepting a business offer. You will have some legal or financial problems to deal with.`,
    },
    {
      title: "Justice",
      detail1: `You need to learn from your past mistakes. Your partner is very demanding. Divorce may be not far away. Legal problems or a court case. You keep looking for solutions to your problems. Tell the truth if you want forgiveness. Marriage problems. If next to a bad card, expect hard times or a painful separation ahead.`,
      detail2: `A contract. A lawyer. money and legal issues. New conditions. A letter from tax department. Family problems in business. You will need to make tough decisions; it will have a long-term effect. Be careful before you sign a contract or rental agreement. If next to a bad card you will lose a court case or get into debt.`,
    },
    {
      title: "The Lovers",
      detail1: `The lovers card shows love and passion. A new relationship. physical attraction. This card can also show that you need to make a choice; be faithful to your partner or get involve in anther relationship. It will always show that you need to control your passion. A past relationship might disturb your current relationship. If next to a bad card, your relationship may end up in a romantic triangle or a great conflict in your love life.`,
      detail2: `The lovers show a business choice. Relationship at work. Use your intuition to make this choice. Physical attraction to a work colleague. If  surrounded by bad cards, you may be cheated in business. `,
    },
    {
      title: "The Magician",
      detail1: `A relationship with huge potential. you are the one who can control the relationship. your partner brings you luck when it comes to money. It is time to take action! It  can show love and working together with you partner. You will start on a positive note and all your material goals will be fulfilled; the sky is the limit. If the Magician card have negative cards surround it, like for example THE DEVIL this means that your partner is playing with you or even try to manipulate you in the future. The Magician represents your ability to function and when this card is in the negative position, for example next to THE TOWER card it often shows sexual problems in love relationship or health issues.`,
      detail2: `Success and great opportunities await you. Financial success in banking, media or as a professional. You are the best in your profession and your skills will impress others. Expect to succeed in high studies, but be careful not to spread your energy over too many areas. If the Magician is surround by negative cards, then it shows money speculation and dishonesty in work or business.`,
    },
    {
      title: "The Moon",
      detail1: `The Moon show your mental and emotional status. Depression. hurt feelings and no emotional stability. Don’t allow yourself to be totally depend on others. You feel disappointed and suffocated in your relationship. Your partner is not mentally stable or he is still thinking of his past relationship. The card can show medication are bad for you. You may live in fear or have unexpressed anger. If next to a bad card, it usually show mental illness, loneliness and a great fear to communicate.`,
      detail2: `Bad for business. bad for money. If you are an artist, the moon will show your creativity and your emotional creative side. You have a vision to become a success and it is not easy. This is basically a negative card that indicate dispute, arguments and bad decision-making. If next to a bad card you feel tired and disappointed from business partner or family.`,
    },
    {
      title: "The Star",
      detail1: `Soft. kindness. A sincere person. A bit innocent. inexperience or a gay relationship. Healing. doing things from the heart. a pure and innocent friendship with trust. Relationship without sex. It is about freedom, peace, serenity, trust and your space you live in. If next to a bad card, it indicates lake of passion and impotence.`,
      detail2: `The Star is a healing card, Great for spirituality, education and the expansion of knowledge. It indicates a brilliant future with a good vision into the future. Be optimistic. Work and study will be successful. If next to a bad card, your plans will not materialize. Laziness is against you. You will need to stand up on your rights or you will find yourself out of the job.`,
    },
    {
      title: "Strength",
      detail1: `You need to see the different between what you want and what you can actually get. A positive sexual energy! physical attraction may not be enough to make this relationship stable. Don’t put pressure on you partner. they don’t want. If next to a bad card, it indicates a conflict, arguments and waste of energy.`,
      detail2: `Competition. things moving forward. A combination of two things. More than one business. a dynamic partnership; success in business can be short live, you must reduce your monthly expenses. don’t force your ideas onto others. If next to a bad card, expect problems with business partners, power struggle.`,
    },
    {
      title: "The Sun",
      detail1: `Good health. Good lover. Happy personality. Success. The sun represent fulfillment of all your dreams.it can show a child or a new born. Success in your relationship is expected. Many moments of happiness and joy. You feel secure and have faith in the future. If next to a bad card, your happiness will be short live or your relationship will be based more on the material aspect and less emotions.`,
      detail2: `Wonderful times ahead. Success and good income. If next to the card wheel of fortune you will become famous. You will achieve huge growth and find financial security. If next to a bad card, don’t let success go to your head as the price of success may be high. Next to the card THE TOWER it show bad health in future.`,
    },
    {
      title: "Temperance",
      detail1: `Not sure! Don’t be in tow relationships. Making up after argument. Conditions in love life. You will get peace only if you compromise. Spiritually you need to be understanding have sympathy and empathy. This is a good time to make up with your partner. Tough to get a commitment. You will reach a dilemma where you need to chose between 2 partners.  `,
      detail2: `You need to adjust to something new. adapting to a new place /people. you need to take 2 jobs. If you continue to search for alternatives you will find what you are looking for. merging of 2 companies or a large expansion of your current business. If you use clever judgment you will be successful.  `,
    },
    {
      title: "The Tower",
      detail1: `Illness. short sickness. Unexpected changes due to family pressures. a health problem will affect your relationship. The Tower card indicate a period of conflict at home. Lots of pressures on you. It is important to understand that this card represents a temporary situation only. If the card is next to a bad card, it show health problems or a stormy relationship.`,
      detail2: `Moving a house. stormy weather. Danger in the night. The Tower card teaches how to change your life. the building cycle, the braking down cycle and rejuvenation. If you are in financial crises you will need great courage in order to make a change. In any event, expect a change for the worse and an increase in sudden expenses. If next to a positive card you can expect move to a new place. `,
    },
    {
      title: "Wheel Of Fortune",
      detail1: `Faith. destiny. good luck. Karmic relationship. A positive wind is blowing in your love life. Fortune and lucky person. A lucky proposal. A great opportunity! People from abroad. foreigner. Success in a new venture. If next to a bad card, a sudden bad twist of faith. Bad luck.`,
      detail2: `Timing is good. lucky period. High earnings. Positive change. a onetime opportunity is waiting for you. A brilliant move will bring you wealth. If this card is next to a bad card, its indicates danger, sudden accident, sudden and unpleasant change that will set you back.`,
    },
    {
      title: "The World",
      detail1: `End of a life cycle. Feeling complete. study abroad will be good for you. Travel far. Love will take you away from home. The World / Universe card however do not represent love or physical attraction. It is more the friendship and the prestige that involve in some relationship. it represents the daily routine, comforts and the financial stability that relationship brings you. If next to a bad card, you are getting bored  and suffer from the monotony of life.`,
      detail2: `Success abroad. Traveling for work. successful journey.
              International business. Immigration issues. Prosperity good progress and material security. You will need to take great  responsibility, this card  show creative involvement and show persistence. If next to a bad card, you will have difficulty in completing a project or a long chapter in your life is about to end`,
    },
  ];

  //hermetic card detail
  hermeticCard_txt = [
    {
      title: "The Chariot",
      detail1: `Your relationship has challenges yet you will find solution to your problems. You will overcome this difficult period. Now is the time to take control of your life.the cards can also show that you are confused and things are not moving forwards.do not except to be involve in an “on and off” relationship, be assertive. If the Chariot is next to a bad card, you may end up in living separately or breakup.`,
      detail2: `You can expect a breakthrough in a project. important decisions will bring more flow and positive changes. If the chariot is next to a bad card, expect financial problems and short period of uncertainty.`,
    },
    {
      title: "Death",
      detail1: `End. No recovery. bad relationship.no future. Widowhood. A loss. You will go through a deep life transformation. A life chapter is closing and there is no way back. A new period will start soon. The death card can sometime show fear of separation and worries about future. If it is next to a positive card, you are entering a new life cycle ! coming out of  a very bad period in your life.`,
      detail2: `You may need to leave the job or change your business. if the card is next to bad card you will get fired from job or force to leave. The card can show a loss. Things are not under your control. It is possible that you will eventually change your way. a change of office, premises, moving to a new place.`,
    },
    {
      title: "The Devil",
      detail1: `The devil is a warning card. Obsessiveness. cheating. Your partner not honest. past relationship. The Devil spiritual lesson is to “learn to let go”. If you are a part of obsessive relationship then this is the time to quit. This card represents lies and betrayal, violent or forbidden passion. stuck in the past!  A person with evil intensions. Not love only financial interests or sex .if surrounded by bad cards it can show Black magic or jealousy! `,
      detail2: `Bad partnership. extortion. Mafia. Black magic from people using you. Someone or something is holding you back. Beware of work colleges. a dispute in your work place. It will be a mistake to mix work with a personal relationship at the work place.  `,
    },
    {
      title: "The Emperor",
      detail1: `A man in high position. boss. Legal issues, tax issues. a married man. you are attracted   to an older man or father figure; relationship with a married man. The Emperor card shows determination and courage and the need to be the leader. This card also presents delays in marriage plans. The negative side f the Emperor is aggression and over expression of power. If the card of the devil is next to the emperor it shows violent, aggressive person.`,
      detail2: `The boss, power, new job position, you are building your financial future. Public figure, a politician. If the Emperor card is next to negative cards it indicates tax problems, financial obstacles, problems with your boss at work, legal problems `,
    },
    {
      title: "The Empress",
      detail1: `A mother. Pregnancy, a married woman. Card of money mix with love. maybe you are connected to a materialistic person. The cards can show pregnancy and thought of having a child .If you are a single man expect marriage  in the near future. If you are a female, then this card represents your desire to have a child. Don’t be too materialistic If the Empress surrounded by negative  it indicate extra marriage  affairs or health issues like hormones and thyroid gland disorders.`,
      detail2: `Prosperity, richness and wealth.; it can show that buying a new house is a good choice now; material success is expected. If negative it can show a high family expenses and wasting money.it often show women working with you or issues dealing with a women boss. It’s a warning to not over indulge in the good things of life.`,
    },
    {
      title: "The Foolish Man",
      detail1: `You need time to yourself and some space to collect your thoughts. The fool card represents a start of a new relationship, a new beginning, a new chapter. the past do not serve you anymore! you need to be free now and focus on a fresh beginning. In fact, you might be thinking of pressing the proverbial “NEXT” button on the game of life. If you are in love right now, the fool card may be a warning to be careful and take things slowly! Or your partner is not as serious as you think or maybe you have a conflict between commitment and being free.`,
      detail2: `Expect the unexpected. The fool card points to some new directions also new opportunities. Anything is possible; be careful of hasty decisions and dangerous travel. Careful where you put your money or don’t be naïve when making your financial plans.`,
    },
    {
      title: "The Hanged Man",
      detail1: `No marriage .Life full of compromising. Delays. Things are not quite clear right now frustration. things are  not in your hand !  You will have to make sacrifices. Even thought you feel that you are banging into a brick wall, be realistic and wait for right moment to act. If next to a bad card : victim of circumstances; boring life ,try to get rid of  guilty feelings.`,
      detail2: `Lazy. delays .it will take time until you get it. It’s a great card for artists and spiritual people. If in business then to get something good you will need to sacrifice something else. Although you feel the need for a change  it may be difficult to make it happen.do not ignore the important things that need to be done first.`,
    },
    {
      title: "The Hermit",
      detail1: `Expect to be disappoint in finding love ; it will take time to find your soul mate. don’t let your past bring you down. Worries and a person who got use to live alone. A person who is emotionally close . you need time out. If next to a positive card, your search for harmony will be fulfilled. Sometimes the card indicates that inner loneliness resides within your marriage relationship `,
      detail2: `Spiritual approach is needed. A Guru. learn more before you start. Financial worries. Poverty. Don’t open this business if this card appears. You need to upgrade your current business. Change your ways or your whole work concept otherwise you will not make a living. The cards show you need to rest and rejuvenate your energy levels.`,
    },
    {
      title: "The Hierophant",
      detail1: `You will find a stable relationship. serious commitment. Marriage is in the cards. The Hierophant can show domestic and legal issues, issues relating to your marriage. If surrounded by bad cards, the hierophant indicates a bad marriage or a life with too many compromises.`,
      detail2: `Paper work ,legal case awaiting decision. If the hierophant card is next to a positive card it show education, good results ,a lawyer, accounting. University admissions will be accepted; visa and immigration process will be successful. If the card surrounded by bad cards, legal problems. You need to get a second opinion`,
    },
    {
      title: "The High Priestess",
      detail1: `Listen to your instinct. your heart will lead you. this is a wisdom card. It can show an old soul or a person who is very mystic and sensitive, an artist . in many cases the card show your partner keeps secrets from you. The person is in bad mental state! it can also show low mental health or depression. mystery and past relationship might be the reason you will end up disappointed. Someone hiding some information. surprisingly the card can show a spiritual bond between you partner. Sacrifice and compromise are needed in order to overcome the current obstacles. If loneliness resides within your relationship, then you will need the courage to change it. keep delaying an emotional decision can be a mistake.`,
      detail2: `An intuitive approach is needed in order to succeed. You need to be more assertive and realistic. You must investigate the situation before taking any financial decision. If you are an artist, don’t be afraid to express your creativity. If your question was on profession, then art, spiritualism, psychology and social work suit you best.`,
    },
    {
      title: "The Last Judgment",
      detail1: `A court session. A past relationship is coming to hunt you. Your judgment day is a reminder to learn unconditional love and not to expect from others. Think if you want  to return to your previous relationship or  to let go forever. The card show great changes are coming your way. which are about to take place, will bring complete liberation into your life. You have been reborn and can see the light. If next to a bad card, you feel guilt and abandonment, which may lead you to a bad judgment`,
      detail2: `You are correcting past mistakes. Learning your lesson. partnership is ok only if both of you are investing the same amount of energy and money! You are going back to the roots. Think before you accepting a business offer. You will have some legal or financial problems to deal with.`,
    },
    {
      title: "Justice",
      detail1: `You need to learn from your past mistakes. Your partner is very demanding. Divorce may be not far away. Legal problems or a court case. You keep looking for solutions to your problems. Tell the truth if you want forgiveness. Marriage problems. If next to a bad card, expect hard times or a painful separation ahead.`,
      detail2: `A contract. A lawyer. money and legal issues. New conditions. A letter from tax department. Family problems in business. You will need to make tough decisions; it will have a long-term effect. Be careful before you sign a contract or rental agreement. If next to a bad card you will lose a court case or get into debt.`,
    },
    {
      title: "The Lovers",
      detail1: `The lovers card shows love and passion. A new relationship. physical attraction. This card can also show that you need to make a choice; be faithful to your partner or get involve in anther relationship. It will always show that you need to control your passion. A past relationship might disturb your current relationship. If next to a bad card, your relationship may end up in a romantic triangle or a great conflict in your love life.`,
      detail2: `The lovers show a business choice. Relationship at work. Use your intuition to make this choice. Physical attraction to a work colleague. If  surrounded by bad cards, you may be cheated in business. `,
    },
    {
      title: "The Magician",
      detail1: `A relationship with huge potential. you are the one who can control the relationship. your partner brings you luck when it comes to money. It is time to take action! It  can show love and working together with you partner. You will start on a positive note and all your material goals will be fulfilled; the sky is the limit. If the Magician card have negative cards surround it, like for example THE DEVIL this means that your partner is playing with you or even try to manipulate you in the future. The Magician represents your ability to function and when this card is in the negative position, for example next to THE TOWER card it often shows sexual problems in love relationship or health issues.`,
      detail2: `Success and great opportunities await you. Financial success in banking, media or as a professional. You are the best in your profession and your skills will impress others. Expect to succeed in high studies, but be careful not to spread your energy over too many areas. If the Magician is surround by negative cards, then it shows money speculation and dishonesty in work or business.`,
    },
    {
      title: "The Moon",
      detail1: `The Moon show your mental and emotional status. Depression. hurt feelings and no emotional stability. Don’t allow yourself to be totally depend on others. You feel disappointed and suffocated in your relationship. Your partner is not mentally stable or he is still thinking of his past relationship. The card can show medication are bad for you. You may live in fear or have unexpressed anger. If next to a bad card, it usually show mental illness, loneliness and a great fear to communicate.`,
      detail2: `Bad for business. bad for money. If you are an artist, the moon will show your creativity and your emotional creative side. You have a vision to become a success and it is not easy. This is basically a negative card that indicate dispute, arguments and bad decision-making. If next to a bad card you feel tired and disappointed from business partner or family.`,
    },
    {
      title: "The Star",
      detail1: `Soft. kindness. A sincere person. A bit innocent. inexperience or a gay relationship. Healing. doing things from the heart. a pure and innocent friendship with trust. Relationship without sex. It is about freedom, peace, serenity, trust and your space you live in. If next to a bad card, it indicates lake of passion and impotence.`,
      detail2: `The Star is a healing card, Great for spirituality, education and the expansion of knowledge. It indicates a brilliant future with a good vision into the future. Be optimistic. Work and study will be successful. If next to a bad card, your plans will not materialize. Laziness is against you. You will need to stand up on your rights or you will find yourself out of the job.`,
    },
    {
      title: "Fortitude",
      detail1: `You need to see the different between what you want and what you can actually get. A positive sexual energy! physical attraction may not be enough to make this relationship stable. Don’t put pressure on you partner. they don’t want. If next to a bad card, it indicates a conflict, arguments and waste of energy.`,
      detail2: `Competition. things moving forward. A combination of two things. More than one business. a dynamic partnership; success in business can be short live, you must reduce your monthly expenses. don’t force your ideas onto others. If next to a bad card, expect problems with business partners, power struggle.`,
    },
    {
      title: "The Sun",
      detail1: `Good health. Good lover. Happy personality. Success. The sun represent fulfillment of all your dreams.it can show a child or a new born. Success in your relationship is expected. Many moments of happiness and joy. You feel secure and have faith in the future. If next to a bad card, your happiness will be short live or your relationship will be based more on the material aspect and less emotions.`,
      detail2: `Wonderful times ahead. Success and good income. If next to the card wheel of fortune you will become famous. You will achieve huge growth and find financial security. If next to a bad card, don’t let success go to your head as the price of success may be high. Next to the card THE TOWER it show bad health in future.`,
    },
    {
      title: "Temperance",
      detail1: `Not sure! Don’t be in tow relationships. Making up after argument. Conditions in love life. You will get peace only if you compromise. Spiritually you need to be understanding have sympathy and empathy. This is a good time to make up with your partner. Tough to get a commitment. You will reach a dilemma where you need to chose between 2 partners.  `,
      detail2: `You need to adjust to something new. adapting to a new place /people. you need to take 2 jobs. If you continue to search for alternatives you will find what you are looking for. merging of 2 companies or a large expansion of your current business. If you use clever judgment you will be successful. `,
    },
    {
      title: "The Blasted Tower",
      detail1: `Illness. short sickness. Unexpected changes due to family pressures. a health problem will affect your relationship. The Tower card indicate a period of conflict at home. Lots of pressures on you. It is important to understand that this card represents a temporary situation only. If the card is next to a bad card, it show health problems or a stormy relationship.`,
      detail2: `Moving a house. stormy weather. Danger in the night. The Tower card teaches how to change your life. the building cycle, the braking down cycle and rejuvenation. If you are in financial crises you will need great courage in order to make a change. In any event, expect a change for the worse and an increase in sudden expenses. If next to a positive card you can expect move to a new place. `,
    },
    {
      title: "The Wheel Of Fortune",
      detail1: `Faith. destiny. good luck. Karmic relationship. A positive wind is blowing in your love life. Fortune and lucky person. A lucky proposal. A great opportunity! People from abroad. foreigner. Success in a new venture. If next to a bad card, a sudden bad twist of faith. Bad luck.`,
      detail2: `Timing is good. lucky period. High earnings. Positive change. a onetime opportunity is waiting for you. A brilliant move will bring you wealth. If this card is next to a bad card, its indicates danger, sudden accident, sudden and unpleasant change that will set you back.`,
    },
    {
      title: "Universe",
      detail1: `End of a life cycle. Feeling complete. study abroad will be good for you. Travel far. Love will take you away from home. The World / Universe card however do not represent love or physical attraction. It is more the friendship and the prestige that involve in some relationship. it represents the daily routine, comforts and the financial stability that relationship brings you. If next to a bad card, you are getting bored  and suffer from the monotony of life.`,
      detail2: `Success abroad. Traveling for work. successful journey.
              International business. Immigration issues. Prosperity good progress and material security. You will need to take great responsibility; this card shows creative involvement and strong persistence. If next to a bad card, you will have difficulty in completing a project or a long chapter in your life is about to end`,
    },
  ];


  ngOnInit() {
    let self = this;
  	this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(9);
    this.deck_mode = this.aRoute.snapshot.paramMap.get('deck_mode');
    this.spread_mode = this.aRoute.snapshot.paramMap.get('spread_mode');
    this.celtic_random_mode = this.aRoute.snapshot.paramMap.get('celtic_random_mode');
    // generate newly, random ten number
    let tenCardNums = [];
    let nums1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
    if(this.celtic_random_mode == 2) {
      tenCardNums = this.sunService.getCelticTenCardNum();
    } else {
      //random generating non-repeating
      let nums1Length = nums1.length;
      let j = 0;
      let countLimit = 0;
      while(nums1Length--) {
        countLimit++;
        if(countLimit > 10) {
          break;
        }
        j = Math.floor(Math.random() * (nums1Length+1));
        tenCardNums[countLimit] = nums1[j];
        nums1.splice(j, 1);
      }
    }
    this.sunService.setCelticTenCardNum(tenCardNums);

    if(this.deck_mode == 1 ) {
      this.deck_folder = "ridercard";      
      for(let i=1; i<=10; i++) {        
        this.celtic_imgPath[i] = "assets/img/tarot/"+this.deck_folder+"/"+tenCardNums[i]+".png";
      }

      if (this.riderImgURL = this.sunService.getRiderImageURL()) {       
        $(".one-img img").attr("src", this.riderImgURL[tenCardNums[1]].changingThisBreaksApplicationSecurity);  
        $(".two-img img").attr("src", this.riderImgURL[tenCardNums[2]].changingThisBreaksApplicationSecurity);    
        $(".three-img img").attr("src", this.riderImgURL[tenCardNums[3]].changingThisBreaksApplicationSecurity);
        $(".four-img img").attr("src", this.riderImgURL[tenCardNums[4]].changingThisBreaksApplicationSecurity);
        $(".five-img img").attr("src", this.riderImgURL[tenCardNums[5]].changingThisBreaksApplicationSecurity);
        $(".six-img img").attr("src", this.riderImgURL[tenCardNums[6]].changingThisBreaksApplicationSecurity);
        $(".seven-img img").attr("src", this.riderImgURL[tenCardNums[7]].changingThisBreaksApplicationSecurity);
        $(".eight-img img").attr("src", this.riderImgURL[tenCardNums[8]].changingThisBreaksApplicationSecurity);
        $(".nine-img img").attr("src", this.riderImgURL[tenCardNums[9]].changingThisBreaksApplicationSecurity);
        $(".ten-img img").attr("src", this.riderImgURL[tenCardNums[10]].changingThisBreaksApplicationSecurity);

      } else {
        $(".one-img img").attr("src", this.celtic_imgPath[1]); 
        $(".two-img img").attr("src", this.celtic_imgPath[2]);
        $(".three-img img").attr("src", this.celtic_imgPath[3]); 
        $(".four-img img").attr("src", this.celtic_imgPath[4]); 
        $(".five-img img").attr("src", this.celtic_imgPath[5]); 
        $(".six-img img").attr("src", this.celtic_imgPath[6]); 
        $(".seven-img img").attr("src", this.celtic_imgPath[7]); 
        $(".eight-img img").attr("src", this.celtic_imgPath[8]); 
        $(".nine-img img").attr("src", this.celtic_imgPath[9]); 
        $(".ten-img img").attr("src", this.celtic_imgPath[10]); 
      }
    } 
   
    if(this.deck_mode == 2) {
      this.deck_folder = "hermetic";
      for(let i=1; i<=10; i++) {        
        this.celtic_imgPath[i] = "assets/img/tarot/"+this.deck_folder+"/"+tenCardNums[i]+".jpg";
      }

      if (this.hermeticImgURL = this.sunService.getHermeticImageURL()) {       
        $(".one-img img").attr("src", this.hermeticImgURL[tenCardNums[1]].changingThisBreaksApplicationSecurity);  
        $(".two-img img").attr("src", this.hermeticImgURL[tenCardNums[2]].changingThisBreaksApplicationSecurity);    
        $(".three-img img").attr("src", this.hermeticImgURL[tenCardNums[3]].changingThisBreaksApplicationSecurity);
        $(".four-img img").attr("src", this.hermeticImgURL[tenCardNums[4]].changingThisBreaksApplicationSecurity);
        $(".five-img img").attr("src", this.hermeticImgURL[tenCardNums[5]].changingThisBreaksApplicationSecurity);
        $(".six-img img").attr("src", this.hermeticImgURL[tenCardNums[6]].changingThisBreaksApplicationSecurity);
        $(".seven-img img").attr("src", this.hermeticImgURL[tenCardNums[7]].changingThisBreaksApplicationSecurity);
        $(".eight-img img").attr("src", this.hermeticImgURL[tenCardNums[8]].changingThisBreaksApplicationSecurity);
        $(".nine-img img").attr("src", this.hermeticImgURL[tenCardNums[9]].changingThisBreaksApplicationSecurity);
        $(".ten-img img").attr("src", this.hermeticImgURL[tenCardNums[10]].changingThisBreaksApplicationSecurity);

      } else {
        $(".one-img img").attr("src", this.celtic_imgPath[1]); 
        $(".two-img img").attr("src", this.celtic_imgPath[2]);
        $(".three-img img").attr("src", this.celtic_imgPath[3]); 
        $(".four-img img").attr("src", this.celtic_imgPath[4]); 
        $(".five-img img").attr("src", this.celtic_imgPath[5]); 
        $(".six-img img").attr("src", this.celtic_imgPath[6]); 
        $(".seven-img img").attr("src", this.celtic_imgPath[7]); 
        $(".eight-img img").attr("src", this.celtic_imgPath[8]); 
        $(".nine-img img").attr("src", this.celtic_imgPath[9]); 
        $(".ten-img img").attr("src", this.celtic_imgPath[10]); 
      }

    }
   
    //title hovering effect section
    $(".celtic-title").hover(function() {
      $(".celtic-title").css({'color': self.getFourColor()});
    }, function() {
      $(".celtic-title").css({'color': '#5A3594'});
    }); 
    $(".celtic-back-reading").hover(function() {
      $(".celtic-back-reading").css({'color': self.getFourColor()});
    }, function() {
      $(".celtic-back-reading").css({'color': '#5A3594'});
    });
  }

  goCelticSelectCards() {
    this.router.navigate(['/tarot/select-cards', {deck_mode:this.deck_mode, spread_mode:this.spread_mode}]); 
  }

  goCelticDetailCards() {
  	this.router.navigate(['/tarot/celtic-detail', {deck_mode:this.deck_mode, spread_mode:this.spread_mode}]); 
  }

  getFourColor() {
    // orange ,deep blue ,yello purple light
    let fourColor = ['#FF7F00', '#0021f3', '#FFFF00', '#e79aff']
    let randomNum;
    randomNum = Math.floor((Math.random() * 4) + 1);
    return fourColor[randomNum-1];
  }
}
