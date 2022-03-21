/**
 * Square wave multiplied by another square wave.
 * https://en.wikipedia.org/wiki/Square_wave
 *
 * @author Nikita Agafonov
 * @copyright (c) 2020-2022 Open Science Tools Ltd. (https://opensciencetools.org)
 * @license Distributed under the terms of the MIT License
 * @description Creates an image of two 2d square waves multiplied with each other.
 * @usedby GratingStim.js
 */

#version 300 es
precision mediump float;

in vec2 vUvs;
out vec4 shaderOut;

#define M_PI 3.14159265358979
uniform float uFreq;
uniform float uPhase;

void main() {
    vec2 uv = vUvs;
    float sx = sign(sin(uFreq * uv.x * 2. * M_PI + uPhase));
    float sy = sign(sin(uFreq * uv.y * 2. * M_PI + uPhase));
    float s = sx * sy * .5 + .5;
    shaderOut = vec4(vec3(s), 1.0);
}
