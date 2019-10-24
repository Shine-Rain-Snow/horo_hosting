import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConstants } from '../../shared/constants';
import { SunProgressService } from '../../services/sun-progress.service';
import { Globals } from '../../shared/globals';
import * as $ from 'jquery';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {

  constructor(private router: Router, 
    private sunService: SunProgressService,
    private stateData: Globals,
    private aRoute: ActivatedRoute) { }

  deck_mode;
  spread_mode;
  singleImagePath;
  single_deck_title;
  single_deck_detail1;
  single_deck_detail2;
  deck_folder;
  yesNo;
  notLenormand = true;
  
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

  //lernomand card detail
  lenormandCard_txt = [
    {
      title: "Cavalier",
      detail1: `It’s a positive card. A new person. New circumstances. New contacts. Good news from far places . Import, Export. A message from abroad, and/ or a relationship with a foreigner. If the card is next to a bad card you can expect bad news.`,
      detail2: `1.	You are about to get good news. 
      2.	Everything will happen quickly.
      3.	The one you are attracted to is here for short term.
      4.	Lots of energy, something was stuck and now is moving forward.
      5.	Someone new entering your life.`,
    },
    {
      title: "Clover Leaf",
      detail1: `Your hopes, gambling, if the cart is surrounded by a good card it shows good luck. short success, happiness. Unexpected event. If the card is near bad card. It means a danger of falling sick or you will end up in getting disappointed.`,
      detail2: `1.	You will get lucky, Good investment.
      2.	If Next to a bad card it means loss or disappointment.
      3.	The card shows sudden changes in your lifestyle, usually positive.
      4.	Excitement, positive approach ,hope. 
      5.	Gambling and taking financial risk can be harmful.
      6.	Someone offers you help.`
    },
    {
      title: "The Ship",
      detail1: `Traveling, a holiday or a business trip is likely. Long distance business opportunities, passport and visa issues, inheritance, Prosperity, receiving money or benefit from abroad. new car.`,
      detail2: `1.	Import export, trading.
      2.	A business trip can be financially beneficial.
      3.	Visitor from far country.
      4.	International study / prospects are high.
      5.	buy new car.`
    },
    {
      title: "House",
      detail1: `Family, Family Business. Home, Good fortune, fruitful project…If surrounded by bad cart be careful of greedy people around you. The card can also show a man water sign (Cancer, Scorpio, Pisces)`,
      detail2: `1.	a new house.
      2.	Family have a lot of effect.
      3.	Comfortable Relationship.
      4.	A father figure, a husband; a man that is loved; a man that cares about you.
      5.	This card shows everything is stable right now.
      6.	Maid, a professional work at home.`
    },
    {
      title: "Tree",
      detail1: `Your Health! Faith, Karma, try to keep a healthy daily routine. The card show a past life connection deeply rooted, if close to the Coffin card then it denotes bad health and danger.`,
      detail2: `1.	 take rest to avoid falling sick.
      2.	someone around you is unwell.
      3.	a growth period patiently wait for things to unfold.
      4.	strong karmic connection with someone, the cards around will indicate positive or negative.
      5.	A long lasting love, Possible soul mate or past-life connection.`
    },
    {
      title: "Clouds",
      detail1: `Unexpected obstacle, bad time, sadness, complicate situation, feeling emotionally low, if the dark side of the clouds are nextto a bad card it is a bad sign. Bad company, Alcoholism, Depression.`,
      detail2: `1.	Careful you will get into trouble or take a bad decision.
      2.	Things will go wrong; you need to change your plans.
      3.	Watch your health! If this card is next to TREE.
      4.	Your career is unsteady, You’re not sure which way to go or what is going to be the outcome. 
      5.	Relationship problems ,suffering.`
    },
    {
      title: "Snake",
      detail1: `Deception, Cheating, manipulating, betrayed, secret passion, forbidden attraction, jealousy, hypocrisy and bad intentions. A Fire sign woman.`,
      detail2: `1.	 a secret affair, don’t trust.
      2.	Seduction. 
      3.	A jealous woman.
      4.	Serious health issue if next to the TREE or CLOUDS.
      5.	Watch out of someone jealous; gossiping behind your back. `
    },
    {
      title: "Coffin",
      detail1: `End of something, great transformation, Death, a bad event, big loss, death after illness. The meaning of this card depends on the card before and after it. it is not always negative. This card can just show a big change in one’s life.`,
      detail2: `1.	A chapter in your life is about to end, it can be a relationship or something to do with work.
      2.	If the cart appears next to a bad card it means bad for money, health or relationship.
      3.	This cart also suggests serious illness and/or a troubled relationship.
      4.	When the cart is next to the Tree and Clouds it show severe illness or life threatening situation.`
    },
    {
      title: "Flowers",
      detail1: `The card shows pleasant moments, positive work opportunity, happiness, joy, gift, good fortune, abundance of love, respect, loyalty. Can also show a woman young, dark with good character.`,
      detail2: `1.	Is there is a woman Aquarius or Gemini or Libran in your life now? The cards surrounding Flowers will tell you about her.
      2.	You will get respect from people who will appreciate your hard work.
      3.	You will celebrate and find love; maybe a woman will fall in love with you.
      4.	Women’s love.`
    },
    {
      title: "Scythe",
      detail1: `Great danger, accident, sudden event, bad but not last long. Breakup. Be careful in driving or when dealing with bad people. Sudden end. A warning card.`,
      detail2: `1.	a bad situation.
      2.	Careful, you might be unaware of a dangerous situation.
      3.	Someone might leave you unexpectedly.
      4.	 leaving your job soon, either by choice or through getting fired.
      5.	Surgery if next to the TREE, the surrounding cards will tell you about your health.`
    },
    {
      title: "The Whip",
      detail1: `conflict, punishment, disagreements, arguments, domestic problems. Involve in competitive sport. The card can show struggling in life and tough time. Violence, abusive relationship. Problems with authorities.222`,
      detail2: `1. feel angry and disappointed about something.
      2.	Argument with love one, Learn to relax.
      3.	Chronical health issue , restrictions.
      4.	Your career is become very demanding. 
      5.	Someone obsessive.`
    },
    {
      title: "The Birds",
      detail1: `Flirting, Gossips. A short prosperous journey, small problems and/or restless behavior is also indicated. Verbal, phone calls, negotiations, twins, siblings, hectic times; an older couple is also seen.`,
      detail2: `1.	You are excited and very attracted to someone.
      2.	Online activity, friends, social media.
      3.	Older lover. 
      4.	It can also show a lot of small issues at work.
      5.	Communication issues.`
    },
    {
      title: "Child",
      detail1: `This cart shows children, Birth announcement, new arrival, someone you trust, pleasant friendship, kindness, a new start, innocence. It also shows a deep desire to have a baby.`,
      detail2: `1.	Innocent approach.
      2.	Growing child; children’s health; fertility.
      3.	If next to a positive card, you will have good relationship with your children.
      4.	Kids products business. 
      5.	Immature person, new start in love. `
    },
    {
      title: "The Fox",
      detail1: `Theft, someone is telling lies, being cheated by a manipulative person, a business manipulator, cunning person, a manger, it’s warning from devious and envious people, treachery and hidden traps.`,
      detail2: `1.	Someone lying or cheating you.
      2.	This is not love, there is money involve here or beneficial relationship.
      3.	 You sign a contract please read carefully the small letters .
      4.	A smart business man, Contract work.
      5.	 If your health is not good or you will need to go for a surgery please go get second opinion. `
    },
    {
      title: "Bear",
      detail1: `Judge, Power, Mother or Father figure, politician, The family leader. Strong person, aggression, When the bear is surrounded with good cards it means you will be protected by a powerful person. If a bad card is next to it, you need to be more caution when interacting with powerful people. The negative aspect of the bear is evil, corrupted or jealousy.`,
      detail2: `1.	You are protected by an older man or a powerful person.
      2.	Straight to overcome problems.
      3.	Someone will try to control you.
      4.	When related to health then Stress or anger management might be necessary, such as meditation or yoga.`
    },
    {
      title: "The stars",
      detail1: `Fame, about your reputation, success, lucky period, public appearance, spirituality ,psychic ability and Dreams. If surrounded by good cards, you will be very successful, fortune of all aspects. if the dark clouds card or the coffin card is next it means, loss of popularity or sudden misfortune. `,
      detail2: `1.	Lady luck is on your side, your popularity is on the rise.
      2.	You will be offered work that can bring recognition. 
      3.	If you are an artist, success is around the corner.
      4.	You’re are going into a lucky relationship. `
    },
    {
      title: "Stork",
      detail1: `Positive change, moving house, relocating , health improve ,pregnancy or planning a baby. Want to have a family.It can also show a woman water sign(Cancer, Scorpio, Pieces)`,
      detail2: `1.	good chance you will get pregnant in future.
      2.	You are in the process of moving a house. 
      3.	Your life will change soon.
      4.	 career change – career growth, a new  path… Anything is possible.
      `
    },
    {
      title: "Dog",
      detail1: `A loyal friend. Trust worthy person, Help from a good person, friendship. if the Mountain card is next to the dog then a friend will turn to an enemy. This cart also shows a reliable and innocent intentions.`,
      detail2: `1.	You will get help from a friend.
      2.	You are in a good company.
      3.	People believe you and you will gain trust. 
      4.	This card could indicate either stable health or a good doctor is helping you.
      5.	 Friendship turns into love.`
    },
    {
      title: "The Tower",
      detail1: `Government authorities, Tax issues, protection, prison, hospital  a person in a leading position or influence. Fame in life, a  famous person or a long life spend. If the cart of the tree is next to the Tower it means severe health problem. It also shows people we know from the past entering back to our life.`,
      detail2: `1.	success and fame will be part of your future life.
      2.	You will reach a position of power, but loneliness will be part of it.
      3.	If a bad card next, it can predict problems with authorities Tax or hospitalizing.
      4.	You prefer to work alone and get things done, rather than working as a team.`
    },
    {
      title: "The Garden",
      detail1: `Good life, Popular, Public figure, high society, being a single, media events, worthy friends, hi society parties, having fun, creativity, meeting new people and artists. If this cart is next to a bad card you can’t trust the people you are socializing with.`,
      detail2: `1.	Attending a wedding or media event, maybe a big party.
      2.	Some important people will help you to get what you want. 
      3.	 spending too much money.
      4.	Overall health and vitality is good.
      5.	Positive career growth, great network.`
    },
    {
      title: "The Mountain",
      detail1: `Delays, life problems, Dangerous enemies, a long difficult period, powerful people, obstacles. It also shows cold relationship. Feeling stuck.`,
      detail2: `1.	Watch out, someone want to harm you.
      2.	A friend might turn into an enemy.
      3.	Stay away from negative people.
      4.	Problems at your workplace, Things aren’t moving in your favor.
      5.	Love has obstacles that need to be resolved or things won’t progress.`
    },
    {
      title: "The Crossroads",
      detail1: `A choice, Separation, important decision, journey, you will have to make choice, decisions. If surrounded by good carts you will find a way out of your problem. Can sometime show a woman earth sign (Taurus, Virgo, Capricorn)`,
      detail2: `1.	Two options at work or maybe in love life.
      2.	Faithfulness issues in relationship.
      3.	No commitment, someone or you planning to walk away.
      4.	You will change your lifestyle or health routine.
      5.	Work responsibilities will grow.`
    },
    {
      title: "The Mouse",
      detail1: `Lost of money in stocks, loss in gambling or in business, theft, poverty, someone is using you financially, might even stealing from you. losing energy. You are wasting your time on the wrong person. Extortion and emotional blackmail.`,
      detail2: `1.	Someone is not honest with you, watch your back. 
      2.	Stop giving your money and energy to the wrong people.
      3.	You might fall sick if you will continue to work too hard.
      4.	Your partner is not really in love with you, it is more for beneficial reasons.
      5.	unemployment or job loss, Can sometime indicates illness.`
    },
    {
      title: "The Heart",
      detail1: `Real love, caring, unconditional love, emotional involvement, spiritual love, falling in love. This cart shows happiness in the near period. This card is a good sign of joy and fortune.`,
      detail2: `1.	Love is in the air, make sure its mutual. 
      2.	Someone expressing his true feeling and intentions.
      3.	The Heart next to Scythe show heartache, relationship breakup, heart surgery.
      4.	The love of your life, Also describes your current love life.
      5.	If the card is next to the snake it shows jealousy, false intentions.`
    },
    {
      title: "The Ring",
      detail1: `Marriage, partnership, commitment. If the ring is surrounded by bad cards it predicts bad marriage or problems in partnership, if next to the tower it can show painful separation.`,
      detail2: `1.	Marriage proposal.
      2.	You will sign a contract or get a new job offer.
      3.	Positive change in relationship.
      4.	Business agreement.
      5.	The Ring symbolizes job offers, new business deal, or work proposal.`
    },
    {
      title: "The Book",
      detail1: `A secret, it can be a secret relationship or any secret activity. Education, things that are unknown to you, mystery, something is about to be revealed. This cart shows wisdom and good advice as well.`,
      detail2: `1.	Someone keeps secrets from you. 
      2.	New information will be revealed.
      3.	News about visa, paper work.
      4.	Investigate if you want to uncover a hidden issue.
      5.	Secret love.`
    },
    {
      title: "The Letter",
      detail1: `good news, messages, paper work, telephone calls and sending mails. It might show an invitation. If the card is close to the clouds the news will be bad.`,
      detail2: `1.	News from abroad, letter from bank and government offices. 
      2.	Can be invitation for a work interview. 
      3.	 Plan to visit family or friends.
      4.	 Appreciation for hard work, award.
      5.	If the heart card next it shows a love letter or romantic communication.`
    },
    {
      title: "The Gentleman",
      detail1: `A man, it is you if you are a man. if the card appears for woman it shows the man she is interested in, husband, a friend, brother, father, the man a woman is interested in.`,
      detail2: `1.	You need to be strong and take leadership.
      2.	Information regarding your husband.
      3.	A relationship with a man.
      4.	If close to the heart it shows joy, satisfaction, and contentment.
      5.	Could show that you have found your soul mate.`
    },
    {
      title: "The Woman",
      detail1: `You if you are a woman. A woman in your life. If the card appears for a man it shows his wife, sister, and daughter or mother also.`,
      detail2: `1.	You need to softer and gentler.
      2.	A relationship with a woman.
      3.	It signifies women habits and personality.
      4.	It will usually signify stable and healthy relationships.
      5.	Next to the Snake it shows a woman you cannot trust.`
    },
    {
      title: "The Lilies.",
      detail1: `An older man, Peach, good relationship, financially well settled, retire person, , support and positive attitude towards life. great respect. Stability and harmony. It might show a man air sign (Gemini, Libra, Aquarius)`,
      detail2: `1.	Influential person will contact you.
      2.	Important meeting with a business man.
      3.	Acknowledgment and recognition, high position.
      4.	Established career or someone who will mentor you.
      5.	Often indicates illness related to old age Dementia.`
    },
    {
      title: "The Sun",
      detail1: `Money and recognition, Victory, Success, good luck, Good fortune. Indicates optimism, happiness, things are in your hand.`,
      detail2: `1.	Your career is a success.
      2.	You will heal from a health problem.
      3.	A good relationship is about to begin.
      4.	Good news financially.`
    },
    {
      title: "The Moon",
      detail1: `Respect, honor, recognition; Fame if you are an artist, a moody person yet talented, attraction to someone, great imagination, you will be praised and respected for your hard work. at work you can expect to be promoted.`,
      detail2: `1.	 indicate romance and the feelings associated with it, It also represents creative endeavors writing a book, an art project.
      2.	Health wise you might need to take some time to recharge.
      3.	 Fame and recognition will come in surprise, It doesn’t mean you have to be a famous celebrity, but it does mean you’ll receive recognition of some sort.
      4.	Amazing artist yet moody and emotional.`
    },
    {
      title: "The Key",
      detail1: `Karmic event, Destiny, spiritual, a new beginning, solutions, success. If next to a bad card it indicates a bad start up.`,
      detail2: `1.	A very important connection, Karmic relationship.
      2.	If close to the card of the Man /women it shows success and positive event.
      3.	 A health issue will eventually improve.
      4.	You have the ability to change your life, destiny will lead you to that.
      5.	This cart shows luck in setting a new business, things in your hand.`
    },
    {
      title: "The Fish",
      detail1: `Great card for Money, richness, high class life. Spending money. owner, good business and good fortune. Can also show a business man or dark man water sign (Pieces, Scorpio, Cancer)`,
      detail2: `1.	It involves all types of business activities – import export, sales, fishing, commercial property, hotels. 
      2.	 you will do well in your own business.
      3.	It can show a health issue regarding hormones or water balance in body.
      4.	 a deep connection in marriage or love relationship.
      5.	It describes a powerful man or a rich man, or business man who is determined and firm. `
    },
    {
      title: "The Anchor",
      detail1: `Your achievements, stability, Faithfulness, success and security. A long-lasting relationship.  over sea business. Want to settle down in life. Serious intentions.`,
      detail2: `1.	Stable career, good prospects, a long-term investment.
      2.	Faithful and unorthodox partner, successful business, Good job position.
      3.	If the Tree card next or a bad card next it can show a long-lasting health problem.
      4.	An open-ended relationship (common law) where you are free to go or stay.
      5.	It sometime shows love to the sea or wanting to immigrate.`
    },
    {
      title: "The Cross",
      detail1: `Sorrow, pain, religious, suffering, misfortune, Hardship, no hope for a situation. Karma, tough destiny, unlucky in life.`,
      detail2: `1.	It typically points to a difficult time, physical and/or emotional pain, despair, or a guilty.
      2.	Bad for work and job search!.
      3.	You wanted your personal life to work out but it didn’t.
      4.	physical or emotional pain for a old family member.
      5.	A serious problem to reach your goals.`
    },
  ];

  ngOnInit() {
  	let self = this;
  	this.sunService.setShowMenu(true);
    this.sunService.setCurrentPage(9);
    this.deck_mode = this.aRoute.snapshot.paramMap.get('deck_mode');
    this.spread_mode = this.aRoute.snapshot.paramMap.get('spread_mode');
    console.log("deck_mode="+this.deck_mode+"spread_mode"+this.spread_mode);

    let singleCardNums;

    if(this.deck_mode == 1) {
      this.deck_folder = "ridercard";
      this.notLenormand = true;
      singleCardNums = Math.floor((Math.random() * 22) + 1);
      this.singleImagePath = "assets/img/tarot/"+this.deck_folder+"/"+singleCardNums+".png";

      this.single_deck_title = this.riderCard_txt[singleCardNums-1].title;
      this.single_deck_detail1 = this.riderCard_txt[singleCardNums-1].detail1;
      this.single_deck_detail2 = this.riderCard_txt[singleCardNums-1].detail2;
      
    }
 
    if(this.deck_mode == 2) {
      this.deck_folder = "hermetic";
      this.notLenormand = true;
      singleCardNums = Math.floor((Math.random() * 22) + 1);
      this.singleImagePath = "assets/img/tarot/"+this.deck_folder+"/"+singleCardNums+".jpg";

      this.single_deck_title = this.hermeticCard_txt[singleCardNums-1].title;
      this.single_deck_detail1 = this.hermeticCard_txt[singleCardNums-1].detail1;
      this.single_deck_detail2 = this.hermeticCard_txt[singleCardNums-1].detail2;
      
    }
    if(this.deck_mode == 3) {
      this.deck_folder = "lenormand";
      this.notLenormand = false;
      singleCardNums = Math.floor((Math.random() * 36) + 1);
      this.singleImagePath = "assets/img/tarot/"+this.deck_folder+"/"+singleCardNums+".jpg";

      this.single_deck_title = this.lenormandCard_txt[singleCardNums-1].title;
      this.single_deck_detail1 = this.lenormandCard_txt[singleCardNums-1].detail1;
      this.single_deck_detail2 = this.lenormandCard_txt[singleCardNums-1].detail2;
      
      
    }
    if((Math.floor((Math.random() * 2) + 1)) == 1) {
      this.yesNo = "Yes";
    } else {
      this.yesNo = "No";
    }
    
    $(".single-title").hover(function() {
      $(".single-title").css({'color': self.getFourColor()});
    }, function() {
      $(".single-title").css({'color': '#5A3594'});
    });
    $(".single-back-reading").hover(function() {
      $(".single-back-reading").css({'color': self.getFourColor()});
    }, function() {
      $(".single-back-reading").css({'color': '#5A3594'});
    });

    $(".single-detail-title").hover(function() {
      $(".single-detail-title").css({'color': self.getFourColor()});
    }, function() {
      $(".single-detail-title").css({'color': '#5A3594'});
    });
  
  }

  ngAfterViewInit() {
    if(this.deck_mode == 3) {
      let strArr = [];

      strArr = this.single_deck_detail2.split(".");
      //console.log(strArr);
      strArr.forEach((element, k) => {
        //console.log("num"+k);
        if(k % 2 != 0) {
          $(".ans-array").append("<div>"+strArr[k-1]+"."+strArr[k]+"."+"</div>");
        } 
        k++;
      });
    }
  }

  goSelectCard() {
  	this.router.navigate(['/tarot/select-cards', {deck_mode:this.deck_mode, spread_mode:this.spread_mode}]); 
  }

  getFourColor() {
    // orange ,deep blue ,yello purple light
    let fourColor = ['#FF7F00', '#0021f3', '#FFFF00', '#e79aff']
    let randomNum
    randomNum = Math.floor((Math.random() * 4) + 1);
    return fourColor[randomNum-1];
  }

}
