# @Scale Conference 2018

## Overview

The conference was a series of talks by software professionals about running processes at scale. The general concensus was that "at scale" indicates multiple machines running a task cooperatively.

The food was delicious and plentiful, and they had a few interesting booths and demos setup by various companies. I saw the Occulus Rift in action, a computer vision system tracking passerby's pose, and an Nvidia autonomous car (stationary of course).

##  Dev Tools and Ops

Attended a talk from Facebook about using Sapienz to automate software testing at scale. Most of this flew over my head. One interesting tidbit I picked up was that a large fraction of their problems are with null pointer exceptions.

Attended a talk from Pinterest about using Goku to work with time seies data. Picked up a few interesting ideas about using huge databases, like sharding.

Attended a talk about Apache Impala for SQL analytics. While it felt a bit like a sales pitch, the capabilities and integration with other tools I use like Tableau looked interesting. Learned quite a bit about resource management, especially when they're scarse. Goals included stopping stuff from breaking, allocating resources intelligently, and using resources efficiently. I also learned that a Daemon is a background-running process, in the Impala case handling requests and memory execution, and also enforcing resource limits.

