/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+css-extras+ignore+js-extras+liquid+lua+markup-templating+mermaid+plant-uml+python+scss+toml+typescript+yaml&plugins=line-numbers+jsonp-highlight+toolbar+copy-to-clipboard */
var _self =
        'undefined' != typeof window
            ? window
            : 'undefined' != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope
              ? self
              : {},
    Prism = (function (e) {
        var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            r = {},
            a = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler:
                    e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof i
                            ? new i(n.type, e(n.content), n.alias)
                            : Array.isArray(n)
                              ? n.map(e)
                              : n
                                    .replace(/&/g, '&amp;')
                                    .replace(/</g, '&lt;')
                                    .replace(/\u00a0/g, ' ');
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                    },
                    objId: function (e) {
                        return (
                            e.__id ||
                                Object.defineProperty(e, '__id', {value: ++t}),
                            e.__id
                        );
                    },
                    clone: function e(n, t) {
                        var r, i;
                        switch (((t = t || {}), a.util.type(n))) {
                            case 'Object':
                                if (((i = a.util.objId(n)), t[i])) return t[i];
                                for (var l in ((r = {}), (t[i] = r), n))
                                    n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                                return r;
                            case 'Array':
                                return (
                                    (i = a.util.objId(n)),
                                    t[i]
                                        ? t[i]
                                        : ((r = []),
                                          (t[i] = r),
                                          n.forEach(function (n, a) {
                                              r[a] = e(n, t);
                                          }),
                                          r)
                                );
                            default:
                                return n;
                        }
                    },
                    getLanguage: function (e) {
                        for (; e; ) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement;
                        }
                        return 'none';
                    },
                    setLanguage: function (e, t) {
                        (e.className = e.className.replace(
                            RegExp(n, 'gi'),
                            '',
                        )),
                            e.classList.add('language-' + t);
                    },
                    currentScript: function () {
                        if ('undefined' == typeof document) return null;
                        if ('currentScript' in document)
                            return document.currentScript;
                        try {
                            throw new Error();
                        } catch (r) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                                r.stack,
                            ) || [])[1];
                            if (e) {
                                var n = document.getElementsByTagName('script');
                                for (var t in n) if (n[t].src == e) return n[t];
                            }
                            return null;
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = 'no-' + n; e; ) {
                            var a = e.classList;
                            if (a.contains(n)) return !0;
                            if (a.contains(r)) return !1;
                            e = e.parentElement;
                        }
                        return !!t;
                    },
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend: function (e, n) {
                        var t = a.util.clone(a.languages[e]);
                        for (var r in n) t[r] = n[r];
                        return t;
                    },
                    insertBefore: function (e, n, t, r) {
                        var i = (r = r || a.languages)[e],
                            l = {};
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == n)
                                    for (var s in t)
                                        t.hasOwnProperty(s) && (l[s] = t[s]);
                                t.hasOwnProperty(o) || (l[o] = i[o]);
                            }
                        var u = r[e];
                        return (
                            (r[e] = l),
                            a.languages.DFS(a.languages, function (n, t) {
                                t === u && n != e && (this[n] = l);
                            }),
                            l
                        );
                    },
                    DFS: function e(n, t, r, i) {
                        i = i || {};
                        var l = a.util.objId;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                t.call(n, o, n[o], r || o);
                                var s = n[o],
                                    u = a.util.type(s);
                                'Object' !== u || i[l(s)]
                                    ? 'Array' !== u ||
                                      i[l(s)] ||
                                      ((i[l(s)] = !0), e(s, t, o, i))
                                    : ((i[l(s)] = !0), e(s, t, null, i));
                            }
                    },
                },
                plugins: {},
                highlightAll: function (e, n) {
                    a.highlightAllUnder(document, e, n);
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector:
                            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                    };
                    a.hooks.run('before-highlightall', r),
                        (r.elements = Array.prototype.slice.apply(
                            r.container.querySelectorAll(r.selector),
                        )),
                        a.hooks.run('before-all-elements-highlight', r);
                    for (var i, l = 0; (i = r.elements[l++]); )
                        a.highlightElement(i, !0 === n, r.callback);
                },
                highlightElement: function (n, t, r) {
                    var i = a.util.getLanguage(n),
                        l = a.languages[i];
                    a.util.setLanguage(n, i);
                    var o = n.parentElement;
                    o &&
                        'pre' === o.nodeName.toLowerCase() &&
                        a.util.setLanguage(o, i);
                    var s = {
                        element: n,
                        language: i,
                        grammar: l,
                        code: n.textContent,
                    };
                    function u(e) {
                        (s.highlightedCode = e),
                            a.hooks.run('before-insert', s),
                            (s.element.innerHTML = s.highlightedCode),
                            a.hooks.run('after-highlight', s),
                            a.hooks.run('complete', s),
                            r && r.call(s.element);
                    }
                    if (
                        (a.hooks.run('before-sanity-check', s),
                        (o = s.element.parentElement) &&
                            'pre' === o.nodeName.toLowerCase() &&
                            !o.hasAttribute('tabindex') &&
                            o.setAttribute('tabindex', '0'),
                        !s.code)
                    )
                        return (
                            a.hooks.run('complete', s),
                            void (r && r.call(s.element))
                        );
                    if ((a.hooks.run('before-highlight', s), s.grammar))
                        if (t && e.Worker) {
                            var c = new Worker(a.filename);
                            (c.onmessage = function (e) {
                                u(e.data);
                            }),
                                c.postMessage(
                                    JSON.stringify({
                                        language: s.language,
                                        code: s.code,
                                        immediateClose: !0,
                                    }),
                                );
                        } else u(a.highlight(s.code, s.grammar, s.language));
                    else u(a.util.encode(s.code));
                },
                highlight: function (e, n, t) {
                    var r = {code: e, grammar: n, language: t};
                    if ((a.hooks.run('before-tokenize', r), !r.grammar))
                        throw new Error(
                            'The language "' + r.language + '" has no grammar.',
                        );
                    return (
                        (r.tokens = a.tokenize(r.code, r.grammar)),
                        a.hooks.run('after-tokenize', r),
                        i.stringify(a.util.encode(r.tokens), r.language)
                    );
                },
                tokenize: function (e, n) {
                    var t = n.rest;
                    if (t) {
                        for (var r in t) n[r] = t[r];
                        delete n.rest;
                    }
                    var a = new s();
                    return (
                        u(a, a.head, e),
                        o(e, a, n, a.head, 0),
                        (function (e) {
                            for (var n = [], t = e.head.next; t !== e.tail; )
                                n.push(t.value), (t = t.next);
                            return n;
                        })(a)
                    );
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var t = a.hooks.all;
                        (t[e] = t[e] || []), t[e].push(n);
                    },
                    run: function (e, n) {
                        var t = a.hooks.all[e];
                        if (t && t.length)
                            for (var r, i = 0; (r = t[i++]); ) r(n);
                    },
                },
                Token: i,
            };
        function i(e, n, t, r) {
            (this.type = e),
                (this.content = n),
                (this.alias = t),
                (this.length = 0 | (r || '').length);
        }
        function l(e, n, t, r) {
            e.lastIndex = n;
            var a = e.exec(t);
            if (a && r && a[1]) {
                var i = a[1].length;
                (a.index += i), (a[0] = a[0].slice(i));
            }
            return a;
        }
        function o(e, n, t, r, s, g) {
            for (var f in t)
                if (t.hasOwnProperty(f) && t[f]) {
                    var h = t[f];
                    h = Array.isArray(h) ? h : [h];
                    for (var d = 0; d < h.length; ++d) {
                        if (g && g.cause == f + ',' + d) return;
                        var v = h[d],
                            p = v.inside,
                            m = !!v.lookbehind,
                            y = !!v.greedy,
                            k = v.alias;
                        if (y && !v.pattern.global) {
                            var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                            v.pattern = RegExp(v.pattern.source, x + 'g');
                        }
                        for (
                            var b = v.pattern || v, w = r.next, A = s;
                            w !== n.tail && !(g && A >= g.reach);
                            A += w.value.length, w = w.next
                        ) {
                            var E = w.value;
                            if (n.length > e.length) return;
                            if (!(E instanceof i)) {
                                var P,
                                    L = 1;
                                if (y) {
                                    if (
                                        !(P = l(b, A, e, m)) ||
                                        P.index >= e.length
                                    )
                                        break;
                                    var S = P.index,
                                        O = P.index + P[0].length,
                                        j = A;
                                    for (j += w.value.length; S >= j; )
                                        j += (w = w.next).value.length;
                                    if (
                                        ((A = j -= w.value.length),
                                        w.value instanceof i)
                                    )
                                        continue;
                                    for (
                                        var C = w;
                                        C !== n.tail &&
                                        (j < O || 'string' == typeof C.value);
                                        C = C.next
                                    )
                                        L++, (j += C.value.length);
                                    L--, (E = e.slice(A, j)), (P.index -= A);
                                } else if (!(P = l(b, 0, E, m))) continue;
                                S = P.index;
                                var N = P[0],
                                    _ = E.slice(0, S),
                                    M = E.slice(S + N.length),
                                    W = A + E.length;
                                g && W > g.reach && (g.reach = W);
                                var z = w.prev;
                                if (
                                    (_ && ((z = u(n, z, _)), (A += _.length)),
                                    c(n, z, L),
                                    (w = u(
                                        n,
                                        z,
                                        new i(
                                            f,
                                            p ? a.tokenize(N, p) : N,
                                            k,
                                            N,
                                        ),
                                    )),
                                    M && u(n, w, M),
                                    L > 1)
                                ) {
                                    var I = {cause: f + ',' + d, reach: W};
                                    o(e, n, t, w.prev, A, I),
                                        g &&
                                            I.reach > g.reach &&
                                            (g.reach = I.reach);
                                }
                            }
                        }
                    }
                }
        }
        function s() {
            var e = {value: null, prev: null, next: null},
                n = {value: null, prev: e, next: null};
            (e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
        }
        function u(e, n, t) {
            var r = n.next,
                a = {value: t, prev: n, next: r};
            return (n.next = a), (r.prev = a), e.length++, a;
        }
        function c(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
            (n.next = r), (r.prev = n), (e.length -= a);
        }
        if (
            ((e.Prism = a),
            (i.stringify = function e(n, t) {
                if ('string' == typeof n) return n;
                if (Array.isArray(n)) {
                    var r = '';
                    return (
                        n.forEach(function (n) {
                            r += e(n, t);
                        }),
                        r
                    );
                }
                var i = {
                        type: n.type,
                        content: e(n.content, t),
                        tag: 'span',
                        classes: ['token', n.type],
                        attributes: {},
                        language: t,
                    },
                    l = n.alias;
                l &&
                    (Array.isArray(l)
                        ? Array.prototype.push.apply(i.classes, l)
                        : i.classes.push(l)),
                    a.hooks.run('wrap', i);
                var o = '';
                for (var s in i.attributes)
                    o +=
                        ' ' +
                        s +
                        '="' +
                        (i.attributes[s] || '').replace(/"/g, '&quot;') +
                        '"';
                return (
                    '<' +
                    i.tag +
                    ' class="' +
                    i.classes.join(' ') +
                    '"' +
                    o +
                    '>' +
                    i.content +
                    '</' +
                    i.tag +
                    '>'
                );
            }),
            !e.document)
        )
            return e.addEventListener
                ? (a.disableWorkerMessageHandler ||
                      e.addEventListener(
                          'message',
                          function (n) {
                              var t = JSON.parse(n.data),
                                  r = t.language,
                                  i = t.code,
                                  l = t.immediateClose;
                              e.postMessage(a.highlight(i, a.languages[r], r)),
                                  l && e.close();
                          },
                          !1,
                      ),
                  a)
                : a;
        var g = a.util.currentScript();
        function f() {
            a.manual || a.highlightAll();
        }
        if (
            (g &&
                ((a.filename = g.src),
                g.hasAttribute('data-manual') && (a.manual = !0)),
            !a.manual)
        ) {
            var h = document.readyState;
            'loading' === h || ('interactive' === h && g && g.defer)
                ? document.addEventListener('DOMContentLoaded', f)
                : window.requestAnimationFrame
                  ? window.requestAnimationFrame(f)
                  : window.setTimeout(f, 16);
        }
        return a;
    })(_self);
'undefined' != typeof module && module.exports && (module.exports = Prism),
    'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
    comment: {pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0},
    prolog: {pattern: /<\?[\s\S]+?\?>/, greedy: !0},
    doctype: {
        pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
            },
            'string': {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
            'punctuation': /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            'name': /[^\s<>'"]+/,
        },
    },
    cdata: {pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0},
    tag: {
        pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/},
            },
            'special-attr': [],
            'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [
                        {pattern: /^=/, alias: 'attr-equals'},
                        {pattern: /^(\s*)["']|["']$/, lookbehind: !0},
                    ],
                },
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {namespace: /^[^\s>\/:]+:/},
            },
        },
    },
    entity: [
        {pattern: /&[\da-z]{1,8};/i, alias: 'named-entity'},
        /&#x?[\da-f]{1,8};/i,
    ],
}),
    (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
        Prism.languages.markup.entity),
    (Prism.languages.markup.doctype.inside['internal-subset'].inside =
        Prism.languages.markup),
    Prism.hooks.add('wrap', function (a) {
        'entity' === a.type &&
            (a.attributes.title = a.content.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        value: function (a, e) {
            var s = {};
            (s['language-' + e] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[e],
            }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var t = {
                'included-cdata': {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: s,
                },
            };
            t['language-' + e] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[e],
            };
            var n = {};
            (n[a] = {
                pattern: RegExp(
                    '(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
                        /__/g,
                        function () {
                            return a;
                        },
                    ),
                    'i',
                ),
                lookbehind: !0,
                greedy: !0,
                inside: t,
            }),
                Prism.languages.insertBefore('markup', 'cdata', n);
        },
    }),
    Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
        value: function (a, e) {
            Prism.languages.markup.tag.inside['special-attr'].push({
                pattern: RegExp(
                    '(^|["\'\\s])(?:' +
                        a +
                        ')\\s*=\\s*(?:"[^"]*"|\'[^\']*\'|[^\\s\'">=]+(?=[\\s>]))',
                    'i',
                ),
                lookbehind: !0,
                inside: {
                    'attr-name': /^[^\s=]+/,
                    'attr-value': {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern:
                                    /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [e, 'language-' + e],
                                inside: Prism.languages[e],
                            },
                            punctuation: [
                                {pattern: /^=/, alias: 'attr-equals'},
                                /"|'/,
                            ],
                        },
                    },
                },
            });
        },
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend('markup', {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml);
!(function (s) {
    var e =
        /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: RegExp(
                '@[\\w-](?:[^;{\\s"\']|\\s+(?!\\s)|' +
                    e.source +
                    ')*?(?:;|(?=\\s*\\{))',
            ),
            inside: {
                'rule': /^@[\w-]+/,
                'selector-function-argument': {
                    pattern:
                        /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: 'selector',
                },
                'keyword': {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0,
                },
            },
        },
        url: {
            pattern: RegExp(
                '\\burl\\((?:' +
                    e.source +
                    '|(?:[^\\\\\r\n()"\']|\\\\[^])*)\\)',
                'i',
            ),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {pattern: RegExp('^' + e.source + '$'), alias: 'url'},
            },
        },
        selector: {
            pattern: RegExp(
                '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
                    e.source +
                    ')*(?=\\s*\\{)',
            ),
            lookbehind: !0,
        },
        string: {pattern: e, greedy: !0},
        property: {
            pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
        },
        important: /!important\b/i,
        function: {pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0},
        punctuation: /[(){};:,]/,
    }),
        (s.languages.css.atrule.inside.rest = s.languages.css);
    var t = s.languages.markup;
    t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'));
})(Prism);
Prism.languages.clike = {
    'comment': [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0,
        },
        {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0},
    ],
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
    },
    'class-name': {
        pattern:
            /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /[.\\]/},
    },
    'keyword':
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    'boolean': /\b(?:false|true)\b/,
    'function': /\b\w+(?=\()/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    'punctuation': /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
        Prism.languages.clike['class-name'],
        {
            pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0,
        },
    ],
    'keyword': [
        {pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0},
        {
            pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0,
        },
    ],
    'function':
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    'number': {
        pattern: RegExp(
            '(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])',
        ),
        lookbehind: !0,
    },
    'operator':
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
    (Prism.languages.javascript['class-name'][0].pattern =
        /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    Prism.languages.insertBefore('javascript', 'keyword', {
        'regex': {
            pattern: RegExp(
                '((?:^|[^$\\w\\xA0-\\uFFFF."\'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))',
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
                'regex-source': {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: 'language-regex',
                    inside: Prism.languages.regex,
                },
                'regex-delimiter': /^\/|\/$/,
                'regex-flags': /^[a-z]+$/,
            },
        },
        'function-variable': {
            pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
        },
        'parameter': [
            {
                pattern:
                    /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
        ],
        'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    Prism.languages.insertBefore('javascript', 'string', {
        'hashbang': {pattern: /^#!.*/, greedy: !0, alias: 'comment'},
        'template-string': {
            pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                'template-punctuation': {pattern: /^`|`$/, alias: 'string'},
                'interpolation': {
                    pattern:
                        /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        'interpolation-punctuation': {
                            pattern: /^\$\{|\}$/,
                            alias: 'punctuation',
                        },
                        'rest': Prism.languages.javascript,
                    },
                },
                'string': /[\s\S]+/,
            },
        },
        'string-property': {
            pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
        },
    }),
    Prism.languages.insertBefore('javascript', 'operator', {
        'literal-property': {
            pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: 'property',
        },
    }),
    Prism.languages.markup &&
        (Prism.languages.markup.tag.addInlined('script', 'javascript'),
        Prism.languages.markup.tag.addAttribute(
            'on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)',
            'javascript',
        )),
    (Prism.languages.js = Prism.languages.javascript);
!(function (e) {
    var t =
            '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
        a = {
            pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
            lookbehind: !0,
            alias: 'punctuation',
            inside: null,
        },
        n = {
            bash: a,
            environment: {pattern: RegExp('\\$' + t), alias: 'constant'},
            variable: [
                {
                    pattern: /\$?\(\([\s\S]+?\)\)/,
                    greedy: !0,
                    inside: {
                        variable: [
                            {pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0},
                            /^\$\(\(/,
                        ],
                        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                        operator:
                            /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                        punctuation: /\(\(?|\)\)?|,|;/,
                    },
                },
                {
                    pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                    greedy: !0,
                    inside: {variable: /^\$\(|^`|\)$|`$/},
                },
                {
                    pattern: /\$\{[^}]+\}/,
                    greedy: !0,
                    inside: {
                        operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                        punctuation: /[\[\]]/,
                        environment: {
                            pattern: RegExp('(\\{)' + t),
                            lookbehind: !0,
                            alias: 'constant',
                        },
                    },
                },
                /\$(?:\w+|[#?*!@$])/,
            ],
            entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
        };
    (e.languages.bash = {
        'shebang': {pattern: /^#!\s*\/.*/, alias: 'important'},
        'comment': {pattern: /(^|[^"{\\$])#.*/, lookbehind: !0},
        'function-name': [
            {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
            },
            {pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function'},
        ],
        'for-or-select': {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: 'variable',
            lookbehind: !0,
        },
        'assign-left': {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
            inside: {
                environment: {
                    pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
                    lookbehind: !0,
                    alias: 'constant',
                },
            },
            alias: 'variable',
            lookbehind: !0,
        },
        'parameter': {
            pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
            alias: 'variable',
            lookbehind: !0,
        },
        'string': [
            {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: n,
            },
            {
                pattern:
                    /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: {bash: a},
            },
            {
                pattern:
                    /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: n,
            },
            {pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0},
            {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: {entity: n.entity},
            },
        ],
        'environment': {pattern: RegExp('\\$?' + t), alias: 'constant'},
        'variable': n.variable,
        'function': {
            pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: !0,
        },
        'keyword': {
            pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
            lookbehind: !0,
        },
        'builtin': {
            pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
            lookbehind: !0,
            alias: 'class-name',
        },
        'boolean': {
            pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
            lookbehind: !0,
        },
        'file-descriptor': {pattern: /\B&\d\b/, alias: 'important'},
        'operator': {
            pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
            inside: {'file-descriptor': {pattern: /^\d/, alias: 'important'}},
        },
        'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        'number': {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: !0,
        },
    }),
        (a.inside = e.languages.bash);
    for (
        var s = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'parameter',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
            ],
            o = n.variable[1].inside,
            i = 0;
        i < s.length;
        i++
    )
        o[s[i]] = e.languages.bash[s[i]];
    (e.languages.sh = e.languages.bash), (e.languages.shell = e.languages.bash);
})(Prism);
!(function (e) {
    var a,
        n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    (e.languages.css.selector = {
        pattern: e.languages.css.selector.pattern,
        lookbehind: !0,
        inside: (a = {
            'pseudo-element':
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            'pseudo-class': /:[-\w]+/,
            'class': /\.[-\w]+/,
            'id': /#[-\w]+/,
            'attribute': {
                pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
                greedy: !0,
                inside: {
                    'punctuation': /^\[|\]$/,
                    'case-sensitivity': {
                        pattern: /(\s)[si]$/i,
                        lookbehind: !0,
                        alias: 'keyword',
                    },
                    'namespace': {
                        pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                        lookbehind: !0,
                        inside: {punctuation: /\|$/},
                    },
                    'attr-name': {
                        pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                        lookbehind: !0,
                    },
                    'attr-value': [
                        n,
                        {
                            pattern:
                                /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                            lookbehind: !0,
                        },
                    ],
                    'operator': /[|~*^$]?=/,
                },
            },
            'n-th': [
                {
                    pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                    lookbehind: !0,
                    inside: {number: /[\dn]+/, operator: /[+-]/},
                },
                {pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0},
            ],
            'combinator': />|\+|~|\|\|/,
            'punctuation': /[(),]/,
        }),
    }),
        (e.languages.css.atrule.inside['selector-function-argument'].inside =
            a),
        e.languages.insertBefore('css', 'property', {
            variable: {
                pattern:
                    /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
            },
        });
    var r = {pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0},
        i = {pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0};
    e.languages.insertBefore('css', 'function', {
        operator: {pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0},
        hexcode: {pattern: /\B#[\da-f]{3,8}\b/i, alias: 'color'},
        color: [
            {
                pattern:
                    /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
            },
            {
                pattern:
                    /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                    unit: r,
                    number: i,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                },
            },
        ],
        entity: /\\[\da-f]{1,8}/i,
        unit: r,
        number: i,
    });
})(Prism);
!(function (n) {
    (n.languages.ignore = {
        comment: /^#.*/m,
        entry: {
            pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
            alias: 'string',
            inside: {
                operator: /^!|\*\*?|\?/,
                regex: {pattern: /(^|[^\\])\[[^\[\]]*\]/, lookbehind: !0},
                punctuation: /\//,
            },
        },
    }),
        (n.languages.gitignore = n.languages.ignore),
        (n.languages.hgignore = n.languages.ignore),
        (n.languages.npmignore = n.languages.ignore);
})(Prism);
!(function (a) {
    function e(a, e) {
        return RegExp(
            a.replace(/<ID>/g, function () {
                return '(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*';
            }),
            e,
        );
    }
    a.languages.insertBefore('javascript', 'function-variable', {
        'method-variable': {
            pattern: RegExp(
                '(\\.\\s*)' +
                    a.languages.javascript['function-variable'].pattern.source,
            ),
            lookbehind: !0,
            alias: [
                'function-variable',
                'method',
                'function',
                'property-access',
            ],
        },
    }),
        a.languages.insertBefore('javascript', 'function', {
            method: {
                pattern: RegExp(
                    '(\\.\\s*)' + a.languages.javascript.function.source,
                ),
                lookbehind: !0,
                alias: ['function', 'property-access'],
            },
        }),
        a.languages.insertBefore('javascript', 'constant', {
            'known-class-name': [
                {
                    pattern:
                        /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                    alias: 'class-name',
                },
                {pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name'},
            ],
        }),
        a.languages.insertBefore('javascript', 'keyword', {
            imports: {
                pattern: e(
                    '(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)',
                ),
                lookbehind: !0,
                inside: a.languages.javascript,
            },
            exports: {
                pattern: e(
                    '(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})',
                ),
                lookbehind: !0,
                inside: a.languages.javascript,
            },
        }),
        a.languages.javascript.keyword.unshift(
            {pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module'},
            {
                pattern:
                    /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
            },
            {pattern: /\bnull\b/, alias: ['null', 'nil']},
            {pattern: /\bundefined\b/, alias: 'nil'},
        ),
        a.languages.insertBefore('javascript', 'operator', {
            spread: {pattern: /\.{3}/, alias: 'operator'},
            arrow: {pattern: /=>/, alias: 'operator'},
        }),
        a.languages.insertBefore('javascript', 'punctuation', {
            'property-access': {pattern: e('(\\.\\s*)#?<ID>'), lookbehind: !0},
            'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
            },
            'dom': {
                pattern:
                    /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: 'variable',
            },
            'console': {pattern: /\bconsole(?=\s*\.)/, alias: 'class-name'},
        });
    for (
        var t = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
            ],
            r = 0;
        r < t.length;
        r++
    ) {
        var n = t[r],
            s = a.languages.javascript[n];
        'RegExp' === a.util.type(s) &&
            (s = a.languages.javascript[n] = {pattern: s});
        var o = s.inside || {};
        (s.inside = o), (o['maybe-class-name'] = /^[A-Z][\s\S]*/);
    }
})(Prism);
!(function (e) {
    function n(e, n) {
        return '___' + e.toUpperCase() + n + '___';
    }
    Object.defineProperties((e.languages['markup-templating'] = {}), {
        buildPlaceholders: {
            value: function (t, a, r, o) {
                if (t.language === a) {
                    var c = (t.tokenStack = []);
                    (t.code = t.code.replace(r, function (e) {
                        if ('function' == typeof o && !o(e)) return e;
                        for (
                            var r, i = c.length;
                            -1 !== t.code.indexOf((r = n(a, i)));

                        )
                            ++i;
                        return (c[i] = e), r;
                    })),
                        (t.grammar = e.languages.markup);
                }
            },
        },
        tokenizePlaceholders: {
            value: function (t, a) {
                if (t.language === a && t.tokenStack) {
                    t.grammar = e.languages[a];
                    var r = 0,
                        o = Object.keys(t.tokenStack);
                    !(function c(i) {
                        for (var u = 0; u < i.length && !(r >= o.length); u++) {
                            var g = i[u];
                            if (
                                'string' == typeof g ||
                                (g.content && 'string' == typeof g.content)
                            ) {
                                var l = o[r],
                                    s = t.tokenStack[l],
                                    f = 'string' == typeof g ? g : g.content,
                                    p = n(a, l),
                                    k = f.indexOf(p);
                                if (k > -1) {
                                    ++r;
                                    var m = f.substring(0, k),
                                        d = new e.Token(
                                            a,
                                            e.tokenize(s, t.grammar),
                                            'language-' + a,
                                            s,
                                        ),
                                        h = f.substring(k + p.length),
                                        v = [];
                                    m && v.push.apply(v, c([m])),
                                        v.push(d),
                                        h && v.push.apply(v, c([h])),
                                        'string' == typeof g
                                            ? i.splice.apply(
                                                  i,
                                                  [u, 1].concat(v),
                                              )
                                            : (g.content = v);
                                }
                            } else g.content && c(g.content);
                        }
                        return i;
                    })(t.tokens);
                }
            },
        },
    });
})(Prism);
(Prism.languages.liquid = {
    comment: {
        pattern: /(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,
        lookbehind: !0,
    },
    delimiter: {
        pattern: /^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,
        alias: 'punctuation',
    },
    string: {pattern: /"[^"]*"|'[^']*'/, greedy: !0},
    keyword:
        /\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,
    object: /\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,
    function: [
        {pattern: /(\|\s*)\w+/, lookbehind: !0, alias: 'filter'},
        {pattern: /(\.\s*)(?:first|last|size)/, lookbehind: !0},
    ],
    boolean: /\b(?:false|nil|true)\b/,
    range: {pattern: /\.\./, alias: 'operator'},
    number: /\b\d+(?:\.\d+)?\b/,
    operator: /[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,
    punctuation: /[.,\[\]()]/,
    empty: {pattern: /\bempty\b/, alias: 'keyword'},
}),
    Prism.hooks.add('before-tokenize', function (e) {
        var t = !1;
        Prism.languages['markup-templating'].buildPlaceholders(
            e,
            'liquid',
            /\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g,
            function (e) {
                var n = /^\{%-?\s*(\w+)/.exec(e);
                if (n) {
                    var i = n[1];
                    if ('raw' === i && !t) return (t = !0), !0;
                    if ('endraw' === i) return (t = !1), !0;
                }
                return !t;
            },
        );
    }),
    Prism.hooks.add('after-tokenize', function (e) {
        Prism.languages['markup-templating'].tokenizePlaceholders(e, 'liquid');
    });
Prism.languages.lua = {
    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
    string: {
        pattern:
            /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
        greedy: !0,
    },
    number: /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    keyword:
        /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
    function: /(?!\d)\w+(?=\s*(?:[({]))/,
    operator: [
        /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
        {pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0},
    ],
    punctuation: /[\[\](){},;]|\.+|:+/,
};
Prism.languages.mermaid = {
    'comment': {pattern: /%%.*/, greedy: !0},
    'style': {
        pattern:
            /^([ \t]*(?:classDef|linkStyle|style)[ \t]+[\w$-]+[ \t]+)\w.*[^\s;]/m,
        lookbehind: !0,
        inside: {
            property: /\b\w[\w-]*(?=[ \t]*:)/,
            operator: /:/,
            punctuation: /,/,
        },
    },
    'inter-arrow-label': {
        pattern:
            /([^<>ox.=-])(?:-[-.]|==)(?![<>ox.=-])[ \t]*(?:"[^"\r\n]*"|[^\s".=-](?:[^\r\n.=-]*[^\s.=-])?)[ \t]*(?:\.+->?|--+[->]|==+[=>])(?![<>ox.=-])/,
        lookbehind: !0,
        greedy: !0,
        inside: {
            'arrow': {
                pattern: /(?:\.+->?|--+[->]|==+[=>])$/,
                alias: 'operator',
            },
            'label': {
                pattern: /^([\s\S]{2}[ \t]*)\S(?:[\s\S]*\S)?/,
                lookbehind: !0,
                alias: 'property',
            },
            'arrow-head': {pattern: /^\S+/, alias: ['arrow', 'operator']},
        },
    },
    'arrow': [
        {
            pattern: /(^|[^{}|o.-])[|}][|o](?:--|\.\.)[|o][|{](?![{}|o.-])/,
            lookbehind: !0,
            alias: 'operator',
        },
        {
            pattern:
                /(^|[^<>ox.=-])(?:[<ox](?:==+|--+|-\.*-)[>ox]?|(?:==+|--+|-\.*-)[>ox]|===+|---+|-\.+-)(?![<>ox.=-])/,
            lookbehind: !0,
            alias: 'operator',
        },
        {
            pattern:
                /(^|[^<>()x-])(?:--?(?:>>|[x>)])(?![<>()x])|(?:<<|[x<(])--?(?!-))/,
            lookbehind: !0,
            alias: 'operator',
        },
        {
            pattern:
                /(^|[^<>|*o.-])(?:[*o]--|--[*o]|<\|?(?:--|\.\.)|(?:--|\.\.)\|?>|--|\.\.)(?![<>|*o.-])/,
            lookbehind: !0,
            alias: 'operator',
        },
    ],
    'label': {
        pattern: /(^|[^|<])\|(?:[^\r\n"|]|"[^"\r\n]*")+\|/,
        lookbehind: !0,
        greedy: !0,
        alias: 'property',
    },
    'text': {
        pattern:
            /(?:[(\[{]+|\b>)(?:[^\r\n"()\[\]{}]|"[^"\r\n]*")+(?:[)\]}]+|>)/,
        alias: 'string',
    },
    'string': {pattern: /"[^"\r\n]*"/, greedy: !0},
    'annotation': {
        pattern:
            /<<(?:abstract|choice|enumeration|fork|interface|join|service)>>|\[\[(?:choice|fork|join)\]\]/i,
        alias: 'important',
    },
    'keyword': [
        {
            pattern:
                /(^[ \t]*)(?:action|callback|class|classDef|classDiagram|click|direction|erDiagram|flowchart|gantt|gitGraph|graph|journey|link|linkStyle|pie|requirementDiagram|sequenceDiagram|stateDiagram|stateDiagram-v2|style|subgraph)(?![\w$-])/m,
            lookbehind: !0,
            greedy: !0,
        },
        {
            pattern:
                /(^[ \t]*)(?:activate|alt|and|as|autonumber|deactivate|else|end(?:[ \t]+note)?|loop|opt|par|participant|rect|state|note[ \t]+(?:over|(?:left|right)[ \t]+of))(?![\w$-])/im,
            lookbehind: !0,
            greedy: !0,
        },
    ],
    'entity': /#[a-z0-9]+;/,
    'operator': {pattern: /(\w[ \t]*)&(?=[ \t]*\w)|:::|:/, lookbehind: !0},
    'punctuation': /[(){};]/,
};
!(function (e) {
    var t = /\$\w+|%[a-z]+%/;
    (e.languages['plant-uml'] = {
        comment: {
            pattern: /(^[ \t]*)(?:'.*|\/'[\s\S]*?'\/)/m,
            lookbehind: !0,
            greedy: !0,
        },
        preprocessor: {
            pattern: /(^[ \t]*)!.*/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
            inside: {variable: t},
        },
        delimiter: {
            pattern: /(^[ \t]*)@(?:end|start)uml\b/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'punctuation',
        },
        arrow: {
            pattern: RegExp(
                '(^|[^-.<>?|\\\\[\\]ox])[[?]?[ox]?(?:(?:-+(?:[drlu]|do|down|le|left|ri|right|up)-+|\\.+(?:[drlu]|do|down|le|left|ri|right|up)\\.+|-+(?:\\[[^[\\]]*\\]-*)?|\\[[^[\\]]*\\]-+|\\.+(?:\\[[^[\\]]*\\]\\.*)?|\\[[^[\\]]*\\]\\.+)(?:>{1,2}|/{1,2}|\\\\{1,2}|\\|>|[#*^+{xo])|(?:<{1,2}|/{1,2}|\\\\{1,2}|<\\||[#*^+}xo])(?:-+(?:[drlu]|do|down|le|left|ri|right|up)-+|\\.+(?:[drlu]|do|down|le|left|ri|right|up)\\.+|-+(?:\\[[^[\\]]*\\]-*)?|\\[[^[\\]]*\\]-+|\\.+(?:\\[[^[\\]]*\\]\\.*)?|\\[[^[\\]]*\\]\\.+)(?:(?:>{1,2}|/{1,2}|\\\\{1,2}|\\|>|[#*^+{xo]))?)[ox]?[\\]?]?(?![-.<>?|\\\\\\]ox])',
            ),
            lookbehind: !0,
            greedy: !0,
            alias: 'operator',
            inside: {
                expression: {
                    pattern: /(\[)[^[\]]+(?=\])/,
                    lookbehind: !0,
                    inside: null,
                },
                punctuation: /\[(?=$|\])|^\]/,
            },
        },
        string: {pattern: /"[^"]*"/, greedy: !0},
        text: {
            pattern: /(\[[ \t]*[\r\n]+(?![\r\n]))[^\]]*(?=\])/,
            lookbehind: !0,
            greedy: !0,
            alias: 'string',
        },
        keyword: [
            {
                pattern:
                    /^([ \t]*)(?:abstract\s+class|end\s+(?:box|fork|group|merge|note|ref|split|title)|(?:fork|split)(?:\s+again)?|activate|actor|agent|alt|annotation|artifact|autoactivate|autonumber|backward|binary|boundary|box|break|caption|card|case|circle|class|clock|cloud|collections|component|concise|control|create|critical|database|deactivate|destroy|detach|diamond|else|elseif|end|end[hr]note|endif|endswitch|endwhile|entity|enum|file|folder|footer|frame|group|[hr]?note|header|hexagon|hide|if|interface|label|legend|loop|map|namespace|network|newpage|node|nwdiag|object|opt|package|page|par|participant|person|queue|rectangle|ref|remove|repeat|restore|return|robust|scale|set|show|skinparam|stack|start|state|stop|storage|switch|title|together|usecase|usecase\/|while)(?=\s|$)/m,
                lookbehind: !0,
                greedy: !0,
            },
            /\b(?:elseif|equals|not|while)(?=\s*\()/,
            /\b(?:as|is|then)\b/,
        ],
        divider: {pattern: /^==.+==$/m, greedy: !0, alias: 'important'},
        time: {
            pattern: /@(?:\d+(?:[:/]\d+){2}|[+-]?\d+|:[a-z]\w*(?:[+-]\d+)?)\b/i,
            greedy: !0,
            alias: 'number',
        },
        color: {pattern: /#(?:[a-z_]+|[a-fA-F0-9]+)\b/, alias: 'symbol'},
        variable: t,
        punctuation: /[:,;()[\]{}]|\.{3}/,
    }),
        (e.languages['plant-uml'].arrow.inside.expression.inside =
            e.languages['plant-uml']),
        (e.languages.plantuml = e.languages['plant-uml']);
})(Prism);
(Prism.languages.python = {
    'comment': {pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0},
    'string-interpolation': {
        pattern:
            /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern:
                    /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    'format-spec': {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0,
                    },
                    'conversion-option': {
                        pattern: /![sra](?=[:}]$)/,
                        alias: 'punctuation',
                    },
                    'rest': null,
                },
            },
            string: /[\s\S]+/,
        },
    },
    'triple-quoted-string': {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: 'string',
    },
    'string': {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0,
    },
    'function': {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0,
    },
    'class-name': {pattern: /(\bclass\s+)\w+/i, lookbehind: !0},
    'decorator': {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: ['annotation', 'punctuation'],
        inside: {punctuation: /\./},
    },
    'keyword':
        /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    'builtin':
        /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    'boolean': /\b(?:False|None|True)\b/,
    'number':
        /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    'punctuation': /[{}[\];(),.:]/,
}),
    (Prism.languages.python[
        'string-interpolation'
    ].inside.interpolation.inside.rest = Prism.languages.python),
    (Prism.languages.py = Prism.languages.python);
(Prism.languages.scss = Prism.languages.extend('css', {
    comment: {pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0},
    atrule: {
        pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
        inside: {rule: /@[\w-]+/},
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
        pattern:
            /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
        inside: {
            parent: {pattern: /&/, alias: 'important'},
            placeholder: /%[-\w]+/,
            variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        },
    },
    property: {
        pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: {variable: /\$[-\w]+|#\{\$[-\w]+\}/},
    },
})),
    Prism.languages.insertBefore('scss', 'atrule', {
        keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            {pattern: /( )(?:from|through)(?= )/, lookbehind: !0},
        ],
    }),
    Prism.languages.insertBefore('scss', 'important', {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/,
    }),
    Prism.languages.insertBefore('scss', 'function', {
        'module-modifier': {
            pattern: /\b(?:as|hide|show|with)\b/i,
            alias: 'keyword',
        },
        'placeholder': {pattern: /%[-\w]+/, alias: 'selector'},
        'statement': {pattern: /\B!(?:default|optional)\b/i, alias: 'keyword'},
        'boolean': /\b(?:false|true)\b/,
        'null': {pattern: /\bnull\b/, alias: 'keyword'},
        'operator': {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
            lookbehind: !0,
        },
    }),
    (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
!(function (e) {
    function n(e) {
        return e.replace(/__/g, function () {
            return '(?:[\\w-]+|\'[^\'\n\r]*\'|"(?:\\\\.|[^\\\\"\r\n])*")';
        });
    }
    e.languages.toml = {
        comment: {pattern: /#.*/, greedy: !0},
        table: {
            pattern: RegExp(
                n(
                    '(^[\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])',
                ),
                'm',
            ),
            lookbehind: !0,
            greedy: !0,
            alias: 'class-name',
        },
        key: {
            pattern: RegExp(
                n('(^[\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)'),
                'm',
            ),
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
        },
        string: {
            pattern:
                /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
        },
        date: [
            {
                pattern:
                    /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
                alias: 'number',
            },
            {pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/, alias: 'number'},
        ],
        number: /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
        boolean: /\b(?:false|true)\b/,
        punctuation: /[.,=[\]{}]/,
    };
})(Prism);
!(function (e) {
    (e.languages.typescript = e.languages.extend('javascript', {
        'class-name': {
            pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null,
        },
        'builtin':
            /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
        e.languages.typescript.keyword.push(
            /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
            /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
            /\btype\b(?=\s*(?:[\{*]|$))/,
        ),
        delete e.languages.typescript.parameter,
        delete e.languages.typescript['literal-property'];
    var s = e.languages.extend('typescript', {});
    delete s['class-name'],
        (e.languages.typescript['class-name'].inside = s),
        e.languages.insertBefore('typescript', 'function', {
            'decorator': {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                    at: {pattern: /^@/, alias: 'operator'},
                    function: /^[\s\S]+/,
                },
            },
            'generic-function': {
                pattern:
                    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                    function:
                        /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                    generic: {
                        pattern: /<[\s\S]+/,
                        alias: 'class-name',
                        inside: s,
                    },
                },
            },
        }),
        (e.languages.ts = e.languages.typescript);
})(Prism);
!(function (e) {
    var n = /[*&][^\s[\]{},]+/,
        r =
            /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
        t =
            '(?:' +
            r.source +
            '(?:[ \t]+' +
            n.source +
            ')?|' +
            n.source +
            '(?:[ \t]+' +
            r.source +
            ')?)',
        a =
            '(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&\'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*'.replace(
                /<PLAIN>/g,
                function () {
                    return '[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]';
                },
            ),
        d = '"(?:[^"\\\\\r\n]|\\\\.)*"|\'(?:[^\'\\\\\r\n]|\\\\.)*\'';
    function o(e, n) {
        n = (n || '').replace(/m/g, '') + 'm';
        var r =
            '([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))'
                .replace(/<<prop>>/g, function () {
                    return t;
                })
                .replace(/<<value>>/g, function () {
                    return e;
                });
        return RegExp(r, n);
    }
    (e.languages.yaml = {
        scalar: {
            pattern: RegExp(
                '([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)'.replace(
                    /<<prop>>/g,
                    function () {
                        return t;
                    },
                ),
            ),
            lookbehind: !0,
            alias: 'string',
        },
        comment: /#.*/,
        key: {
            pattern: RegExp(
                '((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)'
                    .replace(/<<prop>>/g, function () {
                        return t;
                    })
                    .replace(/<<key>>/g, function () {
                        return '(?:' + a + '|' + d + ')';
                    }),
            ),
            lookbehind: !0,
            greedy: !0,
            alias: 'atrule',
        },
        directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: 'important',
        },
        datetime: {
            pattern: o(
                '\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?',
            ),
            lookbehind: !0,
            alias: 'number',
        },
        boolean: {
            pattern: o('false|true', 'i'),
            lookbehind: !0,
            alias: 'important',
        },
        null: {pattern: o('null|~', 'i'), lookbehind: !0, alias: 'important'},
        string: {pattern: o(d), lookbehind: !0, greedy: !0},
        number: {
            pattern: o(
                '[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)',
                'i',
            ),
            lookbehind: !0,
        },
        tag: r,
        important: n,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
    }),
        (e.languages.yml = e.languages.yaml);
})(Prism);
!(function () {
    if ('undefined' != typeof Prism && 'undefined' != typeof document) {
        var e = 'line-numbers',
            n = /\n(?!$)/g,
            t = (Prism.plugins.lineNumbers = {
                getLine: function (n, t) {
                    if ('PRE' === n.tagName && n.classList.contains(e)) {
                        var i = n.querySelector('.line-numbers-rows');
                        if (i) {
                            var r =
                                    parseInt(
                                        n.getAttribute('data-start'),
                                        10,
                                    ) || 1,
                                s = r + (i.children.length - 1);
                            t < r && (t = r), t > s && (t = s);
                            var l = t - r;
                            return i.children[l];
                        }
                    }
                },
                resize: function (e) {
                    r([e]);
                },
                assumeViewportIndependence: !0,
            }),
            i = void 0;
        window.addEventListener('resize', function () {
            (t.assumeViewportIndependence && i === window.innerWidth) ||
                ((i = window.innerWidth),
                r(
                    Array.prototype.slice.call(
                        document.querySelectorAll('pre.line-numbers'),
                    ),
                ));
        }),
            Prism.hooks.add('complete', function (t) {
                if (t.code) {
                    var i = t.element,
                        s = i.parentNode;
                    if (
                        s &&
                        /pre/i.test(s.nodeName) &&
                        !i.querySelector('.line-numbers-rows') &&
                        Prism.util.isActive(i, e)
                    ) {
                        i.classList.remove(e), s.classList.add(e);
                        var l,
                            o = t.code.match(n),
                            a = o ? o.length + 1 : 1,
                            u = new Array(a + 1).join('<span></span>');
                        (l = document.createElement('span')).setAttribute(
                            'aria-hidden',
                            'true',
                        ),
                            (l.className = 'line-numbers-rows'),
                            (l.innerHTML = u),
                            s.hasAttribute('data-start') &&
                                (s.style.counterReset =
                                    'linenumber ' +
                                    (parseInt(
                                        s.getAttribute('data-start'),
                                        10,
                                    ) -
                                        1)),
                            t.element.appendChild(l),
                            r([s]),
                            Prism.hooks.run('line-numbers', t);
                    }
                }
            }),
            Prism.hooks.add('line-numbers', function (e) {
                (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
            });
    }
    function r(e) {
        if (
            0 !=
            (e = e.filter(function (e) {
                var n,
                    t = ((n = e),
                    n
                        ? window.getComputedStyle
                            ? getComputedStyle(n)
                            : n.currentStyle || null
                        : null)['white-space'];
                return 'pre-wrap' === t || 'pre-line' === t;
            })).length
        ) {
            var t = e
                .map(function (e) {
                    var t = e.querySelector('code'),
                        i = e.querySelector('.line-numbers-rows');
                    if (t && i) {
                        var r = e.querySelector('.line-numbers-sizer'),
                            s = t.textContent.split(n);
                        r ||
                            (((r = document.createElement('span')).className =
                                'line-numbers-sizer'),
                            t.appendChild(r)),
                            (r.innerHTML = '0'),
                            (r.style.display = 'block');
                        var l = r.getBoundingClientRect().height;
                        return (
                            (r.innerHTML = ''),
                            {
                                element: e,
                                lines: s,
                                lineHeights: [],
                                oneLinerHeight: l,
                                sizer: r,
                            }
                        );
                    }
                })
                .filter(Boolean);
            t.forEach(function (e) {
                var n = e.sizer,
                    t = e.lines,
                    i = e.lineHeights,
                    r = e.oneLinerHeight;
                (i[t.length - 1] = void 0),
                    t.forEach(function (e, t) {
                        if (e && e.length > 1) {
                            var s = n.appendChild(
                                document.createElement('span'),
                            );
                            (s.style.display = 'block'), (s.textContent = e);
                        } else i[t] = r;
                    });
            }),
                t.forEach(function (e) {
                    for (
                        var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
                        r < t.length;
                        r++
                    )
                        void 0 === t[r] &&
                            (t[r] =
                                n.children[i++].getBoundingClientRect().height);
                }),
                t.forEach(function (e) {
                    var n = e.sizer,
                        t = e.element.querySelector('.line-numbers-rows');
                    (n.style.display = 'none'),
                        (n.innerHTML = ''),
                        e.lineHeights.forEach(function (e, n) {
                            t.children[n].style.height = e + 'px';
                        });
                });
        }
    }
})();
!(function () {
    if ('undefined' != typeof Prism && 'undefined' != typeof document) {
        var t = [];
        o(function (t) {
            if (t && t.meta && t.data) {
                if (t.meta.status && t.meta.status >= 400)
                    return 'Error: ' + (t.data.message || t.meta.status);
                if ('string' == typeof t.data.content)
                    return 'function' == typeof atob
                        ? atob(t.data.content.replace(/\s/g, ''))
                        : 'Your browser cannot decode base64';
            }
            return null;
        }, 'github'),
            o(function (t, e) {
                if (t && t.meta && t.data && t.data.files) {
                    if (t.meta.status && t.meta.status >= 400)
                        return 'Error: ' + (t.data.message || t.meta.status);
                    var n = t.data.files,
                        a = e.getAttribute('data-filename');
                    if (null == a)
                        for (var r in n)
                            if (n.hasOwnProperty(r)) {
                                a = r;
                                break;
                            }
                    return void 0 !== n[a]
                        ? n[a].content
                        : 'Error: unknown or missing gist file ' + a;
                }
                return null;
            }, 'gist'),
            o(function (t) {
                return t && t.node && 'string' == typeof t.data ? t.data : null;
            }, 'bitbucket');
        var e = 0,
            n = 'data-jsonp-status',
            a = 'failed',
            r =
                'pre[data-jsonp]:not([data-jsonp-status="loaded"]):not([data-jsonp-status="loading"])';
        Prism.hooks.add('before-highlightall', function (t) {
            t.selector += ', ' + r;
        }),
            Prism.hooks.add('before-sanity-check', function (o) {
                var i,
                    u = o.element;
                if (u.matches(r)) {
                    (o.code = ''), u.setAttribute(n, 'loading');
                    var s = u.appendChild(document.createElement('CODE'));
                    s.textContent = 'Loading…';
                    var d = o.language;
                    s.className = 'language-' + d;
                    var f = Prism.plugins.autoloader;
                    f && f.loadLanguages(d);
                    var l = u.getAttribute('data-adapter'),
                        c = null;
                    if (l) {
                        if ('function' != typeof window[l])
                            return (
                                u.setAttribute(n, a),
                                void (s.textContent =
                                    ((i = l),
                                    '✖ Error: JSONP adapter function "' +
                                        i +
                                        '" doesn\'t exist'))
                            );
                        c = window[l];
                    }
                    var p = u.getAttribute('data-jsonp');
                    !(function (r, o, i, d) {
                        var f = 'prismjsonp' + e++,
                            l = document.createElement('a');
                        (l.href = r),
                            (l.href +=
                                (l.search ? '&' : '?') +
                                (o || 'callback') +
                                '=' +
                                f);
                        var p = document.createElement('script');
                        (p.src = l.href),
                            (p.onerror = function () {
                                g(), d();
                            });
                        var m = setTimeout(function () {
                            g(), d();
                        }, Prism.plugins.jsonphighlight.timeout);
                        function g() {
                            clearTimeout(m),
                                document.head.removeChild(p),
                                delete window[f];
                        }
                        (window[f] = function (e) {
                            g(),
                                (function (e) {
                                    var r = null;
                                    if (c) r = c(e, u);
                                    else
                                        for (
                                            var o = 0, i = t.length;
                                            o < i &&
                                            null === (r = t[o].adapter(e, u));
                                            o++
                                        );
                                    null === r
                                        ? (u.setAttribute(n, a),
                                          (s.textContent =
                                              '✖ Error: Cannot parse response (perhaps you need an adapter function?)'))
                                        : (u.setAttribute(n, 'loaded'),
                                          (s.textContent = r),
                                          Prism.highlightElement(s));
                                })(e);
                        }),
                            document.head.appendChild(p);
                    })(p, u.getAttribute('data-callback'), 0, function () {
                        u.setAttribute(n, a),
                            (s.textContent = '✖ Error: Timeout loading ' + p);
                    });
                }
            }),
            (Prism.plugins.jsonphighlight = {
                timeout: 5e3,
                registerAdapter: o,
                removeAdapter: function (e) {
                    if (
                        ('string' == typeof e && (e = i(e)),
                        'function' == typeof e)
                    ) {
                        var n = t.findIndex(function (t) {
                            return t.adapter === e;
                        });
                        n >= 0 && t.splice(n, 1);
                    }
                },
                highlight: function (t) {
                    for (
                        var e, n = (t || document).querySelectorAll(r), a = 0;
                        (e = n[a++]);

                    )
                        Prism.highlightElement(e);
                },
            });
    }
    function o(e, n) {
        (n = n || e.name),
            'function' != typeof e ||
                i(e) ||
                i(n) ||
                t.push({adapter: e, name: n});
    }
    function i(e) {
        if ('function' == typeof e) {
            for (var n = 0; (a = t[n++]); )
                if (a.adapter.valueOf() === e.valueOf()) return a.adapter;
        } else if ('string' == typeof e) {
            var a;
            for (n = 0; (a = t[n++]); ) if (a.name === e) return a.adapter;
        }
        return null;
    }
})();
!(function () {
    if ('undefined' != typeof Prism && 'undefined' != typeof document) {
        var e = [],
            t = {},
            n = function () {};
        Prism.plugins.toolbar = {};
        var a = (Prism.plugins.toolbar.registerButton = function (n, a) {
                var r;
                (r =
                    'function' == typeof a
                        ? a
                        : function (e) {
                              var t;
                              return (
                                  'function' == typeof a.onClick
                                      ? (((t =
                                            document.createElement(
                                                'button',
                                            )).type = 'button'),
                                        t.addEventListener(
                                            'click',
                                            function () {
                                                a.onClick.call(this, e);
                                            },
                                        ))
                                      : 'string' == typeof a.url
                                        ? ((t =
                                              document.createElement(
                                                  'a',
                                              )).href = a.url)
                                        : (t = document.createElement('span')),
                                  a.className && t.classList.add(a.className),
                                  (t.textContent = a.text),
                                  t
                              );
                          }),
                    n in t
                        ? console.warn(
                              'There is a button with the key "' +
                                  n +
                                  '" registered already.',
                          )
                        : e.push((t[n] = r));
            }),
            r = (Prism.plugins.toolbar.hook = function (a) {
                var r = a.element.parentNode;
                if (
                    r &&
                    /pre/i.test(r.nodeName) &&
                    !r.parentNode.classList.contains('code-toolbar')
                ) {
                    var o = document.createElement('div');
                    o.classList.add('code-toolbar'),
                        r.parentNode.insertBefore(o, r),
                        o.appendChild(r);
                    var i = document.createElement('div');
                    i.classList.add('toolbar');
                    var l = e,
                        d = (function (e) {
                            for (; e; ) {
                                var t = e.getAttribute('data-toolbar-order');
                                if (null != t)
                                    return (t = t.trim()).length
                                        ? t.split(/\s*,\s*/g)
                                        : [];
                                e = e.parentElement;
                            }
                        })(a.element);
                    d &&
                        (l = d.map(function (e) {
                            return t[e] || n;
                        })),
                        l.forEach(function (e) {
                            var t = e(a);
                            if (t) {
                                var n = document.createElement('div');
                                n.classList.add('toolbar-item'),
                                    n.appendChild(t),
                                    i.appendChild(n);
                            }
                        }),
                        o.appendChild(i);
                }
            });
        a('label', function (e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute('data-label')) {
                var n,
                    a,
                    r = t.getAttribute('data-label');
                try {
                    a = document.querySelector('template#' + r);
                } catch (e) {}
                return (
                    a
                        ? (n = a.content)
                        : (t.hasAttribute('data-url')
                              ? ((n = document.createElement('a')).href =
                                    t.getAttribute('data-url'))
                              : (n = document.createElement('span')),
                          (n.textContent = r)),
                    n
                );
            }
        }),
            Prism.hooks.add('complete', r);
    }
})();
!(function () {
    function t(t) {
        var e = document.createElement('textarea');
        (e.value = t.getText()),
            (e.style.top = '0'),
            (e.style.left = '0'),
            (e.style.position = 'fixed'),
            document.body.appendChild(e),
            e.focus(),
            e.select();
        try {
            var o = document.execCommand('copy');
            setTimeout(function () {
                o ? t.success() : t.error();
            }, 1);
        } catch (e) {
            setTimeout(function () {
                t.error(e);
            }, 1);
        }
        document.body.removeChild(e);
    }
    'undefined' != typeof Prism &&
        'undefined' != typeof document &&
        (Prism.plugins.toolbar
            ? Prism.plugins.toolbar.registerButton(
                  'copy-to-clipboard',
                  function (e) {
                      var o = e.element,
                          n = (function (t) {
                              var e = {
                                  'copy': 'Copy',
                                  'copy-error': 'Press Ctrl+C to copy',
                                  'copy-success': 'Copied!',
                                  'copy-timeout': 5e3,
                              };
                              for (var o in e) {
                                  for (
                                      var n = 'data-prismjs-' + o, c = t;
                                      c && !c.hasAttribute(n);

                                  )
                                      c = c.parentElement;
                                  c && (e[o] = c.getAttribute(n));
                              }
                              return e;
                          })(o),
                          c = document.createElement('button');
                      (c.className = 'copy-to-clipboard-button'),
                          c.setAttribute('type', 'button');
                      var r = document.createElement('span');
                      return (
                          c.appendChild(r),
                          u('copy'),
                          (function (e, o) {
                              e.addEventListener('click', function () {
                                  !(function (e) {
                                      navigator.clipboard
                                          ? navigator.clipboard
                                                .writeText(e.getText())
                                                .then(e.success, function () {
                                                    t(e);
                                                })
                                          : t(e);
                                  })(o);
                              });
                          })(c, {
                              getText: function () {
                                  return o.textContent;
                              },
                              success: function () {
                                  u('copy-success'), i();
                              },
                              error: function () {
                                  u('copy-error'),
                                      setTimeout(function () {
                                          !(function (t) {
                                              window
                                                  .getSelection()
                                                  .selectAllChildren(t);
                                          })(o);
                                      }, 1),
                                      i();
                              },
                          }),
                          c
                      );
                      function i() {
                          setTimeout(function () {
                              u('copy');
                          }, n['copy-timeout']);
                      }
                      function u(t) {
                          (r.textContent = n[t]),
                              c.setAttribute('data-copy-state', t);
                      }
                  },
              )
            : console.warn(
                  'Copy to Clipboard plugin loaded before Toolbar plugin.',
              ));
})();
