---
title: "SE Commands"
layout: "base.njk"
permalink: secommands.html
bg: img/yoshiost-bg.png
---

<h1 class="ui center aligned header">{{ title }}</h1>
<table class="ui selectable celled table">
  <thead>
    <tr>
      <th>Info</th>
      <th>Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>set user to:</td>
      <td>
          <div class="ui column stackable celled grid">
            <div class="row">
              <div class="six wide column">viewer</div>
              <div class="ten wide column">
                <div class="ui action enabled input">
                  <input type="text" id="viewer" value="!level name 100">
                  <button class="ui teal right labeled icon button" onclick="copyToClipboard('viewer')">
                    <i class="copy icon"></i>
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="six wide column">subscriber</div>
              <div class="ten wide column">
                <div class="ui action enabled input">
                  <input type="text" id="subscriber" value="!level name 250">
                  <button class="ui teal right labeled icon button" onclick="copyToClipboard('subscriber')">
                    <i class="copy icon"></i>
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="six wide column">regular</div>
              <div class="ten wide column">
                <div class="ui action enabled input">
                  <input type="text" id="regular" value="!level name 300">
                  <button class="ui teal right labeled icon button" onclick="copyToClipboard('regular')">
                    <i class="copy icon"></i>
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="six wide column">moderator</div>
              <div class="ten wide column">
                <div class="ui action enabled input">
                  <input type="text" id="moderator" value="!level name 500">
                  <button class="ui teal right labeled icon button" onclick="copyToClipboard('moderator')">
                    <i class="copy icon"></i>
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="six wide column">supermoderator</div>
              <div class="ten wide column">
                <div class="ui action enabled input">
                  <input type="text" id="moderator" value="!level name 1000">
                  <button class="ui teal right labeled icon button" onclick="copyToClipboard('moderator')">
                    <i class="copy icon"></i>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
      </td>
    </tr>
    <tr>
      <td>Add a command</td>
      <td>
        <div class="ui action enabled input">
          <input type="text" id="command" value="!command add">
          <button class="ui teal right labeled icon button" onclick="copyToClipboard('command')">
            <i class="copy icon"></i>
            Copy
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <td>Alt command name</td>
      <td>
        <div class="ui action enabled input">
          <input type="text" id="alias" value="!command alias add basecommand aliascommand1 aliascommand2">
          <button class="ui teal right labeled icon button" onclick="copyToClipboard('alias')">
            <i class="copy icon"></i>
            Copy
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <td>Set title</td>
      <td>
        <div class="ui action enabled input">
          <input type="text" id="settitle" value="!settitle title">
          <button class="ui teal right labeled icon button" onclick="copyToClipboard('settitle')">
            <i class="copy icon"></i>
            Copy
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <td>Set game category</td>
      <td>
        <div class="ui action enabled input">
          <input type="text" id="setgame" value="!setgame game">
          <button class="ui teal right labeled icon button" onclick="copyToClipboard('setgame')">
            <i class="copy icon"></i>
            Copy
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <td>Shoutout</td>
      <td>
        <div class="ui action enabled input">
          <input type="text" id="shoutout" value="!command add !so Check out ${1}, they are playing ${game ${1}} at https://twitch.tv/${channel ${1}}">
          <button class="ui teal right labeled icon button" onclick="copyToClipboard('shoutout')">
            <i class="copy icon"></i>
            Copy
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <td>Counter:</td>
      <td>
          <div class="ui column stackable celled grid">
            <div class="row">
              <div class="six wide column">Show</div>
              <div class="ten wide column">
                <div class="ui action enabled input">
                  <input type="text" id="showcounter" value="!command add !showcount person said counter ${getcount count} time/s">
                  <button class="ui teal right labeled icon button" onclick="copyToClipboard('showcounter')">
                    <i class="copy icon"></i>
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="six wide column">Add</div>
              <div class="ten wide column">
                <div class="ui action enabled input">
                  <input type="text" id="addcounter" value='!command add !addcount person said counter ${count counter "+${1}"} time/s'>
                  <button class="ui teal right labeled icon button" onclick="copyToClipboard('addcounter')">
                    <i class="copy icon"></i>
                    Copy
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="six wide column">Reset</div>
              <div class="ten wide column">
                <div class="ui action enabled input">
                  <input type="text" id="resetcounter" value='!command add !resetcount person said counter ${count counter 0} time/s'>
                  <button class="ui teal right labeled icon button" onclick="copyToClipboard('resetcounter')">
                    <i class="copy icon"></i>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
      </td>
    </tr>
  </tbody>
</table>
