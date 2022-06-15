import { KeyCodeTypes } from './typings';
import { _keyCodes } from './utils';

export type SubOrSuper = 'subValue' | 'supValue';

type SubSuperSetup = {
  subOrSuper: SubOrSuper;
  attachEventListeners?: boolean;
};
class SubSuper {
  private static instance: SubSuper;
  public subOrSuper: SubOrSuper;
  attachEventListeners: boolean = true;
  private _currentElement: HTMLInputElement | undefined = undefined;

  /**
   * SubSuper is a Singleton, and cannot directly be instantiated with `new` operator
   */

  private constructor(setupOptions: SubSuperSetup) {
    this.subOrSuper = setupOptions.subOrSuper;
    if (typeof setupOptions.attachEventListeners === 'undefined') {
      // USER DID NOT PASS SO WE ASSUME ITS TRUE
      this.attachEventListeners = true;
      this.attacheEventListener();
    } else {
      // USER DID PASS SO WE ASSIGN IT APPROPRIATELY
      if (setupOptions.attachEventListeners) {
        this.attachEventListeners = true;
        this.attacheEventListener();
      }
      if (setupOptions.attachEventListeners) {
        this.attachEventListeners = false;
      }
    }
  }

  public static getInstance(setupOptions: SubSuperSetup): SubSuper {
    if (!SubSuper.instance) {
      SubSuper.instance = new SubSuper(setupOptions);
    }
    return SubSuper.instance;
  }

  // PRIVATE METHODS
  private attacheEventListener() {
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
    // CTRL and SHIFT -> Listen for
    if (e.ctrlKey && e.shiftKey) {
      for (let index = 0; index < _keyCodes.length; index++) {
        const keyCode: KeyCodeTypes = _keyCodes[index];
        if (keyCode.code == e.code) {
          this.takeCurrentValue(keyCode[this.subOrSuper]);
        }
      }
    }
  };

  /**
   * @param subToAdd  Comment for parameter ´subToAdd´.
   * @returns `void`.
   */
  private takeCurrentValue = (subToAdd: string): void => {
    if (this._currentElement) {
      const value = this._currentElement.value;
      const splitValue = value.split('');
      if (splitValue) {
        const sectionStart = this._currentElement.selectionStart;
        splitValue.splice(sectionStart as number, 0, subToAdd);
        const joinedValue = splitValue.join('');

        // https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          'value'
        );
        nativeInputValueSetter?.set?.call(this._currentElement, joinedValue);
        const event = new Event('input', { bubbles: true });
        this._currentElement?.dispatchEvent(event);
      }
    }
  };

  // PUBLIC METHODS
  /**
   * setToSubScript
   */
  public setToSubScript() {
    this.subOrSuper = 'subValue';
  }
  /**
   * setToSupScript
   */
  public setToSupScript() {
    this.subOrSuper = 'supValue';
  }

  /**
   * Toggle between sup or super script
   */
  public toggleScript() {
    if (this.subOrSuper === 'subValue') {
      this.subOrSuper = 'supValue';
    } else {
      this.subOrSuper = 'subValue';
    }
  }
}

export default SubSuper;
