toplist = ["Home", "Learn" ,"Documentation", "Updates", "Interpreters"]
$(".bar").append('<div class="topbar"><div class="rightlist"></div></div>')
for (var i = 0; i < toplist.length; i++) {
  $(".rightlist").append('<div class="list" id="'+ toplist[i] +'">'+ toplist[i] +'</div>')
}

document.addEventListener('DOMContentLoaded', function() {
  let output = document.getElementById('output');
  let evalForm = document.getElementById('eval-form');
  let input = document.getElementById('code-input');
  evalForm.onsubmit = function(e) {
    e.preventDefault();
    output.innerHTML = eval(input.value).stdout.join('');
  };
});
