function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
  let back_RBG = map(second(), 0, 60, 0, 255);
  let back_color = color(150, 150, back_RBG);
  
  background(back_color);
  let s = map(second(), 0, 60, 0, width);
  let m = map(minute(), 0, 60, 0, width);
  let h = map(hour(), 0, 24, 0, width);
  
  let s_RBG = map(second(),0,60,0,255);
  let m_RBG = map(minute(), 0, 60, 0, 255);
  let h_RBG = map(hour(), 0, 24, 0, 255);
  
  let s_color = color(s_RBG, s_RBG, 0);
  let m_color = color(0, m_RBG, m_RBG);
  let h_color = color(h_RBG, 0, h_RBG);
  
  fill(h_color);
  stroke(h_color);
  ellipse(h, 300, 300, 300);
  
  fill(m_color);
  stroke(m_color);
  ellipse(m, 300, 100, 100);
  
  fill(s_color);
  stroke(s_color);
  ellipse(s, 300, 30, 30);  
}
