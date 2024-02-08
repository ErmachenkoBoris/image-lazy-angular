import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'angular-defer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/"><=Menu</a>
    <h1>angular defer</h1>
    <p>angular &#64;defer Магия идет из коробки 17 Ангуляр </p>
    <div style="height: 400px">
        @defer (on viewport) {
            <div>
                <img src="https://dummyimage.com/600x400/753e75/fff&text=131" width="800" height="400">
            </div>
        } @placeholder {
        <div>placeholder 31</div>
        }
    </div>

    <div style="height: 400px">
        @defer (on viewport) {
            <div style="height: 400px">
                <img src="https://dummyimage.com/600x400/753e75/fff&text=132" width="800" height="400">
            </div>
        } @placeholder {
        <div>placeholder 32</div>
        }
    </div>

    <div style="height: 400px">
        @defer (on viewport) {
            <div style="height: 400px">
                <img src="https://dummyimage.com/600x400/753e75/fff&text=133" width="800" height="400">
            </div>
        } @placeholder {
        <div>placeholder 33</div>
        }
    </div>

    <div style="height: 400px">
        @defer (on viewport) {
            <div>
                <img src="https://dummyimage.com/600x400/753e75/fff&text=134" width="800" height="400">
            </div>
        } @placeholder {
        <div>placeholder 34</div>
        }
    </div>

    <div style="height: 400px">
        @defer (on viewport) {
            <div>
                <img src="https://dummyimage.com/600x400/753e75/fff&text=135" width="800" height="400">
            </div>
        } @placeholder {
        <div>placeholder 35</div>
        }
    </div>

    <div style="height: 400px">
        @defer (on viewport) {
            <div>
                <img src="https://dummyimage.com/600x400/753e75/fff&text=136" width="800" height="400">
            </div>
        } @placeholder {
        <div>placeholder 36</div>
        }
    </div>

    <div style="height: 400px">
        @defer (on viewport) {
            <div>
                <img src="https://dummyimage.com/600x400/753e75/fff&text=137" width="800" height="400">
            </div>
        } @placeholder {
        <div>placeholder 37</div>
        }
    </div>
  `,
})
export class AngularDefer {}
