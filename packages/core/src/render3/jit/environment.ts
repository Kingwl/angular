/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {defineInjectable, defineInjector,} from '../../di/defs';
import {inject} from '../../di/injector';
import * as r3 from '../index';
import * as sanitization from '../../sanitization/sanitization';


/**
 * A mapping of the @angular/core API surface used in generated expressions to the actual symbols.
 *
 * This should be kept up to date with the public exports of @angular/core.
 */
export const angularCoreEnv: {[name: string]: Function} = {
  'ɵdefineBase': r3.defineBase,
  'ɵdefineComponent': r3.defineComponent,
  'ɵdefineDirective': r3.defineDirective,
  'defineInjectable': defineInjectable,
  'defineInjector': defineInjector,
  'ɵdefineNgModule': r3.defineNgModule,
  'ɵdefinePipe': r3.definePipe,
  'ɵdirectiveInject': r3.directiveInject,
  'ɵgetFactoryOf': r3.getFactoryOf,
  'ɵgetInheritedFactory': r3.getInheritedFactory,
  'inject': inject,
  'ɵinjectAttribute': r3.injectAttribute,
  'ɵinjectChangeDetectorRef': r3.injectChangeDetectorRef,
  'ɵinjectElementRef': r3.injectElementRef,
  'ɵinjectTemplateRef': r3.injectTemplateRef,
  'ɵinjectViewContainerRef': r3.injectViewContainerRef,
  'ɵtemplateRefExtractor': r3.templateRefExtractor,
  'ɵNgOnChangesFeature': r3.NgOnChangesFeature,
  'ɵPublicFeature': r3.PublicFeature,
  'ɵInheritDefinitionFeature': r3.InheritDefinitionFeature,
  'ɵelementAttribute': r3.elementAttribute,
  'ɵbind': r3.bind,
  'ɵcontainer': r3.container,
  'ɵnextContext': r3.nextContext,
  'ɵcontainerRefreshStart': r3.containerRefreshStart,
  'ɵcontainerRefreshEnd': r3.containerRefreshEnd,
  'ɵloadDirective': r3.loadDirective,
  'ɵloadQueryList': r3.loadQueryList,
  'ɵnamespaceHTML': r3.namespaceHTML,
  'ɵnamespaceMathML': r3.namespaceMathML,
  'ɵnamespaceSVG': r3.namespaceSVG,
  'ɵelementStart': r3.elementStart,
  'ɵelementEnd': r3.elementEnd,
  'ɵelement': r3.element,
  'ɵEC': r3.elementContainerStart,
  'ɵeC': r3.elementContainerEnd,
  'ɵpureFunction0': r3.pureFunction0,
  'ɵpureFunction1': r3.pureFunction1,
  'ɵpureFunction2': r3.pureFunction2,
  'ɵpureFunction3': r3.pureFunction3,
  'ɵpureFunction4': r3.pureFunction4,
  'ɵpureFunction5': r3.pureFunction5,
  'ɵpureFunction6': r3.pureFunction6,
  'ɵpureFunction7': r3.pureFunction7,
  'ɵpureFunction8': r3.pureFunction8,
  'ɵpureFunctionV': r3.pureFunctionV,
  'ɵgetCurrentView': r3.getCurrentView,
  'ɵrestoreView': r3.restoreView,
  'ɵinterpolation1': r3.interpolation1,
  'ɵinterpolation2': r3.interpolation2,
  'ɵinterpolation3': r3.interpolation3,
  'ɵinterpolation4': r3.interpolation4,
  'ɵinterpolation5': r3.interpolation5,
  'ɵinterpolation6': r3.interpolation6,
  'ɵinterpolation7': r3.interpolation7,
  'ɵinterpolation8': r3.interpolation8,
  'ɵinterpolationV': r3.interpolationV,
  'ɵelementClassProp': r3.elementClassProp,
  'ɵlistener': r3.listener,
  'ɵload': r3.load,
  'ɵprojection': r3.projection,
  'ɵelementProperty': r3.elementProperty,
  'ɵpipeBind1': r3.pipeBind1,
  'ɵpipeBind2': r3.pipeBind1,
  'ɵpipeBind3': r3.pipeBind3,
  'ɵpipeBind4': r3.pipeBind4,
  'ɵpipeBindV': r3.pipeBindV,
  'ɵprojectionDef': r3.projectionDef,
  'ɵpipe': r3.pipe,
  'ɵquery': r3.query,
  'ɵqueryRefresh': r3.queryRefresh,
  'ɵregisterContentQuery': r3.registerContentQuery,
  'ɵreference': r3.reference,
  'ɵelementStyling': r3.elementStyling,
  'ɵelementStylingMap': r3.elementStylingMap,
  'ɵelementStylingProp': r3.elementStyleProp,
  'ɵelementStylingApply': r3.elementStylingApply,
  'ɵtemplate': r3.template,
  'ɵtext': r3.text,
  'ɵtextBinding': r3.textBinding,
  'ɵembeddedViewStart': r3.embeddedViewStart,
  'ɵembeddedViewEnd': r3.embeddedViewEnd,

  'ɵzh': sanitization.sanitizeHtml,
  'ɵzs': sanitization.sanitizeStyle,
  'ɵzss': sanitization.defaultStyleSanitizer,
  'ɵzr': sanitization.sanitizeResourceUrl,
  'ɵzc': sanitization.sanitizeScript,
  'ɵzu': sanitization.sanitizeUrl
};
