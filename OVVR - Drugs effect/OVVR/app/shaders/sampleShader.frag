#version 300 es

// precision and interface variables .....................................
precision highp float ;
precision highp int ;
in vec2 cc ;

// input sampler to be sampled ...........................................
uniform sampler2D in_colr ;

// output of the shader ..................................................
layout (location = 0 ) out vec4 out_colr ;

/*========================================================================
 * main body of the shader
 *========================================================================
 */
void main(){
    out_colr = texture( in_colr, vec2(cc.x) ) ;
    return ;
}
