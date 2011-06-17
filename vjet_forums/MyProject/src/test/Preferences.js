function Preferences(args) {
    if (isObject(args)) {
      if (args.branch)
        this._prefBranch = args.branch;
      if (args.site)
        this._site = args.site;
    }
    else if (args)
      this._prefBranch = args;
}

Preferences.prototype = {
//... some funcs ...
}