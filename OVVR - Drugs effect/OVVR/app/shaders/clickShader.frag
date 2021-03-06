#version 300 es
#include precision.glsl

/*------------------------------------------------------------------------
 * Interface variables
 *------------------------------------------------------------------------
 */

in      vec2        pixPos ;
uniform sampler2D   map ;
uniform vec2        clickPosition ;
uniform vec4        clickValue ;
uniform float       clickRadius ;

/*------------------------------------------------------------------------
 * output colors
 *------------------------------------------------------------------------
 */
layout (location = 0 )  out vec4 FragColor ;

/*=========================================================================
 * Main body of Buffer Swap Shader 
 *=========================================================================
 */
void main()
{
    vec4 t = texture(map,pixPos) ;
    vec2 diffVec = pixPos - clickPosition ;
    if (length(diffVec) < clickRadius ){
        t.r = clickValue.r ;
    }
    FragColor = t ;
}

