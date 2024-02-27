---
title: "Bible Plan Configurator"
layout: "base.njk"
permalink: planconfig.html
bg: img/yoshiost-bg.png
---

<h1 class="ui center aligned header">{{ title }}</h1>
<div class="ui container">
  <div class="ui segment">
  <div class="ui fluid left icon input">
    <input id="input-bot" type="text" placeholder="Discord Bot Name">
    <i class="robot icon"></i>
  </div>

  <div class="ui fluid left icon input">
    <input id="input-image" type="text" placeholder="Image Link">
    <i class="image icon"></i>
  </div>

  <div class="ui fluid left icon input">
    <input id="input-webhook" type="text" placeholder="Webhook URL">
    <i class="chain icon"></i>
  </div>

  <div class="ui fluid left icon input">
    <input id="input-csv" type="text" placeholder=".csv file">
    <i class="scroll icon"></i>
  </div>
  <div class="ui calendar" id="standard_calendar">
    <div class="ui fluid input left icon">
      <i class="calendar icon"></i>
      <input id="input-calendar" type="text" placeholder="Starting Date">
    </div>
  </div>
  <div class="ui fluid selection dropdown">
    <input id="input-site" type="hidden" name="Web Link">
    <i class="dropdown icon"></i>
    <div class="default text">Web Link</div>
    <div class="scrollhint menu">
      <div class="item" data-value="LSB">read.lsbible.org</div>
      <div class="item" data-value="biblegateway ESV">www.biblegateway.com(ESV)</div>
      <div class="item" data-value="biblegateway LSB">www.biblegateway.com(LSB)</div>
      <div class="item" data-value="biblegateway WEB">www.biblegateway.com(WEB)</div>
    </div>
  </div>
  <div class="ui compact segment">
    <div class="ui checkbox">
      <input id="input-embed" type="checkbox">
      <label>Show Embedded Links?</label>
    </div>
  </div>
  <div class="ui wrapping spaced buttons">
    <button class="ui button" onclick = "downloadFile()">
      Generate
    </button>
  </div>
    <script>
    const downloadFile = () => {
      const link = document.createElement("a");
      const botname = document.querySelector("#input-bot").value || 'Plan Bot';
      const image = document.querySelector("#input-image").value || 'https://cdn.pixabay.com/photo/2022/02/20/09/43/animal-7024108_960_720.png';
      const webhook = document.querySelector("#input-webhook").value || 'https://discord.com/api/webhooks/a/b';
      const mywebhook = webhook.split("/");
      const webhookId = mywebhook[5];
      const webhookToken = mywebhook[6];
      const site = document.querySelector("#input-site").value.match(/\S+/);
      const version = document.querySelector("#input-site").value.match(/\S+$/);
      const embed = document.querySelector("#input-embed").checked;
      const csvfile = document.querySelector("#input-csv").value || 'plan.csv';
      var calendar = new Date(document.querySelector("#input-site").value);
      if (isNaN(calendar))
      {
        calendar = new Date();
      }
      const content = '{ "hooks" : ['
      + '{'
      + '"botname": "' + botname + '",'
      + '"image": "' + image + '",'
      + '"webhookId": "'+ webhookId + '",'
      + '"webhookToken": "'+ webhookToken + '",'
      + '"csvfile": "'+ csvfile + '",'
      + '"startdate": "'+ calendar.getTime() + '",'
      + '"site": "'+ site + '",'
      + '"version": "'+ version + '",'
      + '"embed": "'+ embed
      + '"}]'
      + '}';
      const file = new Blob([content],{type: 'application/json'});
      console.log(calendar.getTime());
      link.href = URL.createObjectURL(file);
      link.download = "config.json";
      link.click();
      URL.revokeObjectURL(link.href);
    }
    </script>
  </div>
</div>
