import { _keyCodes } from './utils';
import { keyCodeTypes, mainIncomingSettings } from './typings';

export class SuperorSub {
  isSuper: boolean;
  private _currentElement!: HTMLInputElement;

  constructor({ isSuper }: mainIncomingSettings) {
    this.isSuper = isSuper;
    this.init();
  }

  toggleSuperorSub(bool: boolean) {
    this.isSuper = bool;
  }
  private init() {
    document.addEventListener('focusin', () => this.setCurrentElement());
    window.addEventListener('keydown', e => {
      this.keyDown(e);
    });
  }

  private setCurrentElement() {
    if (document) {
      this._currentElement = document.activeElement as HTMLInputElement;
    }
  }

  private keyDown = async (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey) {
      for (let index = 0; index < _keyCodes.length; index++) {
        const keyCode: keyCodeTypes = _keyCodes[index];
        if (keyCode.code == e.code) {
          const localIsSuper = this.isSuper ? 'supervalue' : 'subvalue';
          this.takecurrentValue(keyCode[localIsSuper]);
        }
      }
    }
  };

  private takecurrentValue = (subToAdd: string): void => {
    if (this._currentElement) {
      const value = this._currentElement.value;
      const splitValue = value.split('');
      if (splitValue) {
        const sectionStart = this._currentElement.selectionStart;
        const sectionEnd = this._currentElement.selectionEnd;
        splitValue.splice(sectionStart as number, 0, subToAdd);
        this._currentElement.value = splitValue.join('');
        this._currentElement.setSelectionRange(
          (sectionStart as number) + 1,
          (sectionEnd as number) + 1
        );
      }
    }
  };
}
