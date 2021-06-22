#version 300 es
#include precision.glsl

in vec2        pixPos ;

uniform sampler2D   map ;
uniform float       minVlt, maxVlt ;
uniform float       ry ;


layout (location=0) out vec4 FragColor ;

/*=========================================================================
 * main
 *=========================================================================
 */
void main(){
    vec4 val = texture( map, pixPos ) ;
    float V = val.r ;
    if ( pixPos.y < ry ){
        V = 0. ;
    } ;
    val.r = V ;
    val.g = (V-minVlt)/(maxVlt-minVlt) ;
    FragColor = val ;
    return ;
}
