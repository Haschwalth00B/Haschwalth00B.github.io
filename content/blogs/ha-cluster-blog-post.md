---
layout: default
title: High Availability Cluster
date: '2025-09-15'
---

# Building a High Availability Cluster

## Introduction

We built a high availability cluster for our academic project. The goal was simple: keep services running even when nodes fail.

## Project Goals

Our primary objective was to create a system capable of maintaining continuous service availability through automatic failover mechanisms. This meant designing infrastructure that could detect failures and seamlessly redirect workloads without human intervention.

## Technical Architecture

### Hardware Setup

Our cluster foundation consisted of:
- **4 physical nodes** working in concert
- **1 Gbps LAN connectivity** via managed network switch
- Dedicated management interfaces for cluster communication (proxmox)

While our initial architecture called for Ceph distributed storage and VLAN segmentation, but due to resource and time constraints we had to skip these. Not integrating ceph caused vms/services to restart when automatic failures happened .

### Time Synchronization: The Hidden Critical Component

Keeping all nodes synchronized is important to prevent split-brain issues. We used one of our node's Chrony as our NTP server following [IBM's setup guide](https://www.ibm.com/docs/en/db2/11.1.0?topic=suntp-setting-up-chrony-as-network-time-protocol-server-client-by-using-chronyd-linux).

## Cluster Capabilities

Our implementation successfully demonstrated two critical HA features:

### Manual Service Migration
- **Purpose**: Enables proactive workload movement for planned maintenance
- **Result**: Zero progress loss during migration
- **Use case**: System updates, hardware maintenance, load balancing

### Automatic Failover
- **Trigger**: Automatic detection of node failure
- **Response**: Services automatically restart on healthy nodes
- **Recovery time**: Near-instant with proper storage backend (seconds without)

*Note: While full Ceph integration would have enabled seamless failover with continuous data synchronization, our current setup experiences brief service interruption during automatic recovery—a trade-off we accepted given our resource and time constraints.*

## Key Technical Learnings

### Network Performance is Paramount
High-throughput networking isn't just nice to have—it's essential. When replicating RAM states and storage across nodes, every millisecond of latency impacts user experience. Our 1 Gbps backbone provided adequate performance, though 10 Gbps or more would be ideal for production environments.

### The Value of Traffic Segmentation
While not fully implemented due to constraints, VLAN segmentation helps in segregating management traffic, VM communication, and storage replication which significantly improves both security posture and network efficiency.

### Resource Constraints Drive Innovation
The unavailability of SSDs for Ceph deployment forced us to focus on core clustering concepts rather than getting lost in storage complexity. 


## Visual Documentation

![Cluster Setup in Lab](/images/cluster.jpg)
*Our cluster nodes in action, featuring the network infrastructure and management setup*

## Future Roadmap

While we're okay with what we've accomplished, this project is far from complete. Our planned enhancements include:

1. **Full Ceph Integration**: Implementing distributed storage for true zero-downtime failover
2. **Advanced VLAN Configuration**: Complete traffic segmentation for improved performance and security
3. And adding basic things to make the user experience better

---

*This project was completed as part of our academic curriculum, but the lessons learned extend far beyond the classroom. Special thanks to all team members for their dedication and to our institution for providing the resources to make this exploration possible.*

**Teammates**: [Sahith](https://github.com/SAHITH627), [Srushtik](https://github.com/SrushtikShetty), [Sunith](https://github.com/SunithNayak99), Shamanth and myself
