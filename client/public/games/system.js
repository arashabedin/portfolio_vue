

function EvalSound(soundobj) {
var thissound=document.getElementById(soundobj);
try {
thissound.Play();
}
catch (e) {
thissound.DoPlay();

}
}