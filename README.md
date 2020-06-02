To reproduce the issue, build the module:

```
yarn build
```

Use from a Java application running Java >=9:

```Java

import software.neta.repro.MyConsturct;
import software.neta.repro.MyInnerConstruct;

public class ReproStack extends Stack {
    public ReproStack(final Construct scope, final String id) {
      this(scope, id, null);
      MyInnerConstruct repro = new MyConsturct(this, "MyName").getComplexProperty(); // This line will throw `ConcurrentModificationException`
   }
}

```
