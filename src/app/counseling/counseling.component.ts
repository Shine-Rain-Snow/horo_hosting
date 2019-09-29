import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../shared/constants';
import { SunProgressService } from '../services/sun-progress.service';
import { Globals } from '../shared/globals';
import * as $ from 'jquery'; 
@Component({
  selector: 'app-counseling',
  templateUrl: './counseling.component.html',
  styleUrls: ['./counseling.component.scss']
})
export class CounselingComponent implements OnInit {

  constructor(private router: Router, 
    public stateData: Globals, 
    private sunService: SunProgressService) { }

  ngOnInit() {
    this.sunService.setProgressShow(false);
    this.sunService.setCurrentPage(5);
    this.sunService.setShowMenu(true);
    this.watch_play();
  }

  watch_play() {
    $(document).ready(function(){
      $('#bangkok_time').jsRapClock({
          caption:'BangKok',
          clockNumbers:false,
          clock:1,
          stopwatch:10,
          shiftH:0,
          shiftM:0,
          shiftS:0
      });
      $('#newyork_time').jsRapClock({
        caption:'NewYork',
        clockNumbers:false,
        clock:1,
        stopwatch:10,
        shiftH:3,
        shiftM:0,
        shiftS:0
      });
      $('#mumbai_time').jsRapClock({
        caption:'Mumbai',
        clockNumbers:false,
        clock:1,
        stopwatch:10,
        shiftH:4,
        shiftM:0,
        shiftS:0
      });
      $('#dubai_time').jsRapClock({
        caption:'Dubai',
        clockNumbers:false,
        clock:1,
        stopwatch:10,
        shiftH:9,
        shiftM:0,
        shiftS:0
      });
    });
    $(window).resize(function(){
      $('.rapClock').each(function(){
        this.Render();
      });
      });
      
      (function($){
      $.fn.jsRapClock = function(options){
        
      return this.each(function(){
      this.opt = $.extend({
        caption:'',
        clockNumbers:true,
        clock:0,
        stopwatch:0,
        pitch:1.0,
        rate:0.8,
        shiftH:0,
        shiftM:0,
        shiftS:0
      },options);
     
      let base = this;
      this.synth = window.speechSynthesis;
      this.timerId = 0;
      this.sec = 0;
      
      $(this).bind({
        click : function(e){
          if(base.opt.stopwatch){
            if(base.timerId){
              clearInterval(base.timerId);
              //base.Speak('stopwatch off');
              base.timerId = 0;
              
            }else{
              base.sec = 0;
              //base.Speak('stopwatch on');
              base.timerId = setInterval(function(){
                base.sec += base.opt.stopwatch;
                
                let t = base.sec;
                let s = t % 60;
                t = Math.floor(t / 60);
                let m = t % 60;
                
                let h = Math.floor(t / 60);
                
              },base.opt.stopwatch * 1000);
            }
          }else if(base.opt.clock){
          
            base.opt.clock = 0;
          }else{
            
            base.opt.clock = 1;
          }
        }
      });
      
      this.Render = function(){
        $(this).empty();
        var w = $(this).width();
        $(this).addClass('rapClock').height(w);
        if(this.opt.caption)
          $('<div>').addClass('rapClockCaption').css({'font-size':(w * 0.08)+ 'px'}).text(this.opt.caption).appendTo(this);
        for(var n = 0;n < 12;n++)
          // if(this.opt.clockNumbers)
            $('<div>').text((n + 5) % 12 + 1).addClass('rapClockNumbers').css({'font-size':(w * 0.1)+ 'px',transform:'translate(-50%,-50%) rotate(' + (n * 30) + 'deg) translate(0,' + (w * 0.36) + 'px) rotate(-' + (n * 30) + 'deg)'}).appendTo(this);
          // else
          // $('<div>').addClass('rapClockHours').css('transform','translate(-50%,-50%) rotate(' + (n * 30) + 'deg) translate(0,500%)').appendTo(this);
        $('<div>').addClass('rapClockHands rapClockH').appendTo(this);
        $('<div>').addClass('rapClockHands rapClockM').appendTo(this);
        $('<div>').addClass('rapClockHands rapClockS').appendTo(this);
        this.ShowTime();
      }
      
      this.ShowTime = function(){
      let d = new Date();
      let t = d.getTime() + this.opt.shiftH * 3600000 + this.opt.shiftM * 60000 + this.opt.shiftS * 1000;
      d.setTime(t);
      let h = d.getHours();
      let m = d.getMinutes();
      let s = d.getSeconds();
      
      $('.rapClockH',this).css('transform','translate(-50%,-50%) rotate(' + (h * 30 + m / 2) + 'deg) translate(0,-40%)');
      $('.rapClockM',this).css('transform','translate(-50%,-50%) rotate(' + (m * 6) + 'deg) translate(0,-45%)');
      $('.rapClockS',this).css('transform','translate(-50%,-50%) rotate(' + (s * 6) + 'deg) translate(0,-30%)');
      
      }
      
      this.Render();
      setInterval( function(){
        base.ShowTime();
      },1000 );
      
      });
      
      }})($);
  }


}
