#version 300 es
#include precision.glsl

/*------------------------------------------------------------------------
 * "attribute"s in WebGL1 change to "in"s to a vertexShaders in WebGL2.
 * It will receive data from a buffer
 *------------------------------------------------------------------------
 */
in vec4 position;

/*------------------------------------------------------------------------
 * "varyings" in WebGL1 change to "out" variables in WebGL2 vertexShaders
 *------------------------------------------------------------------------
 */
out vec2 pixPos ;
out vec2 cc ;

/*========================================================================
 * Main body of the vertexShader
 *========================================================================
 */
void main() {
    pixPos = position.xy ;
    cc = position.xy ;
    gl_Position = vec4(position.x*2.-1., position.y*2.-1.,0.,1.0);
}
